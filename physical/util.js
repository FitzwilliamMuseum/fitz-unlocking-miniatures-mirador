"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDimensionsService = exports.Units = exports.RulerDirections = exports.LocationMapping = exports.ClassName = void 0;

var _lodash = require("lodash");

/* eslint-disable no-param-reassign */
var Location = {
  BOTTOM_LEFT: [0, 1],
  BOTTOM_RIGHT: [1, 1],
  TOP_LEFT: [0, 0],
  TOP_RIGHT: [1, 0]
};
var PHYS_DIM_URL = 'http://iiif.io/api/annex/services/physdim';
var ERR_MSG_NO_SERVICE = 'no dimensions service provided';
var ClassName = 'plugin-ruler';
exports.ClassName = ClassName;
var LocationMapping = {
  'bottom-left': Location.BOTTOM_LEFT,
  'bottom-right': Location.BOTTOM_RIGHT,
  'top-left': Location.TOP_LEFT,
  'top-right': Location.TOP_RIGHT
};
exports.LocationMapping = LocationMapping;
var Units = {
  imperial: [{
    conversionFactor: 25.4,
    labelFactors: [1e-9, 1e-6, 1e-3, 0.01, 1],
    unit: 'in'
  }, {
    conversionFactor: 25.4 * 12,
    labelFactors: [1],
    unit: 'ft'
  }, {
    conversionFactor: 25.4 * 12 * 5280,
    labelFactors: [1e-6, 1e-3, 0.1, 1, 10, 100, 1e3, 1e6],
    unit: 'ml'
  }],
  metric: [{
    conversionFactor: 1e-6,
    labelFactors: [0.1, 1, 10, 1000, 1e4],
    unit: 'nm'
  }, {
    conversionFactor: 0.001,
    labelFactors: [1, 10],
    unit: 'μm'
  }, {
    conversionFactor: 0.1,
    labelFactors: [0.1, 1],
    unit: 'mm'
  }, {
    conversionFactor: 10,
    labelFactors: [1, 10],
    unit: 'cm'
  }, {
    conversionFactor: 1000,
    labelFactors: [1, 10, 100],
    unit: 'm'
  }, {
    conversionFactor: 1e6,
    labelFactors: [0.1, 1, 10, 100, 1000, 1000],
    unit: 'km'
  }, {
    conversionFactor: 94607304725808000,
    labelFactors: [1e-9, 1e-6, 1e-3, 1, 1e3, 1e6, 1e9],
    unit: 'ly'
  }]
};
exports.Units = Units;
var RulerDirections = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
};
/**
 * checks the serive according to the dimensions
 * @param {*} service
 * @param {*} cb
 */

exports.RulerDirections = RulerDirections;

var checkDimensionsService = function checkDimensionsService(service) {
  return new Promise(function (resolve, reject) {
    if (service && Array.isArray(service)) {
      service = service.find(function (srvc) {
        return srvc.profile === PHYS_DIM_URL;
      });
    }

    if (service && service.profile === PHYS_DIM_URL) {
      if (service.physicalScale && service.physicalUnits) {
        // Embedded Service
        resolve(service);
      } else if ((!service.physicalScale || !service.physicalUnits) && service['@id']) {
        // Remote Service
        fetch(service['@id']).then(function (remoteService) {
          (0, _lodash.extend)(service, remoteService);
          resolve(service);
        })["catch"](function (ex) {
          reject(ex);
        });
      } else {
        reject(new Error(ERR_MSG_NO_SERVICE));
      }
    }
  });
};

exports.checkDimensionsService = checkDimensionsService;