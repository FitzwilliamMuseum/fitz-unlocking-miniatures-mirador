import Mirador from 'mirador';
import { layersPlugin, physicalPlugin } from '~/plugins';

const config = {
  id: 'demo',
  windows: [
    {
      manifestId: "images/manifest.json"
    }
  ],
  selectedTheme: 'fitzwilliam',
  themes: {
    fitzwilliam: {
      palette: {
        type: 'light',
        primary: {
          main: '#000000',
        },
        shades: {
          dark: '#000000', //canvase background
        },
      },
    }
  },
  window: {
    sideBarOpen: true,
    allowClose: false,
    defaultSideBarPanel: 'annotations',
    allowTopMenuButton: false,
    allowFullscreen: false,
    allowMaximize: false,
    panels: {
      info: true,
      attribution: true,
      canvas: false,
      annotations: true,
      search: false,
      layers: false,
    },
  },
  workspace: {
    showZoomControls: true,
    type: 'mosaic', // Which workspace type to load by default. Other possible values are "elastic"
  },
  workspaceControlPanel: {
    enabled: false,
  },
  requests: {
    postprocessors: [
      // Functions that receive HTTP responses and manipulates them before adding to store
      // An example of manipulating the response for an annotation request
      (url, action) => {
        if (action.annotationId) {
          // action.annotationJson = {};
          // action.annotationJson.resources.forEach((resource) =>{
          //   // resource.resource.selector = {
          //   //   "@context": "http://iiif.io/api/annex/openannotation/context.json",
          //   //   "@type": "iiif:ImageApiSelector",
          //   //   "region": "50,50,1250,1850"
          //   // }

          //   resource.on =
          //   {
          //     "@type": "oa:SpecificResource",
          //     "full": "https://iiif.harvardartmuseums.org/manifests/object/299843/canvas/canvas-47174896",
          //     "selector": {
          //       "@type": "oa:FragmentSelector",
          //       "value": "xywh=622,591,642,940"
          //     }
          //   }
          // })
          // console.log("postProcess action", action);
        }
      }
    ]
  },
  translations: {
    en: {
      openCompanionWindow_CustomLayers: 'Custom Layers'
    }
  }
};

Mirador.viewer(config, [
  ...layersPlugin,
  ...physicalPlugin,
  // annotations
]);
