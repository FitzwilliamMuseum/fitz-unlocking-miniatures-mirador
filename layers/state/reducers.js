import deepmerge from 'deepmerge';
import { OLAMALU_UPDATE_CUSTOM_LAYERS } from './actions';

/**
 * configReducer - does a deep merge of the config
 */
export const customLayersReducer = (state = {}, action) => {
  switch (action.type) {
    case OLAMALU_UPDATE_CUSTOM_LAYERS:
      return {
        ...state,
        [action.windowId]: {
          ...state[action.windowId],
          [action.canvasId]: deepmerge(
            (state[action.windowId] || {})[action.canvasId] || {},
            action.payload,
          ),
        },
      };
    default:
      return state;
  }
};
