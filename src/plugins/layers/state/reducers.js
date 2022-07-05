import { OLAMALU_CUSTOM_LAYERS_UPDATE_LAYERS, OLAMALU_CUSTOM_LAYERS_ORIENTATION } from './actions';

/**
 * configReducer - does a deep merge of the config
 */
export const customLayersReducer = (state = {}, action) => {
  switch (action.type) {
    case OLAMALU_CUSTOM_LAYERS_UPDATE_LAYERS:
      return {
        ...state,
        [action.windowId]: {
          ...state[action.windowId],
          [action.canvasId]: {
            ...state[action.windowId]?.[action.canvasId],
            ...action.payload
          }
        }
      };
    case OLAMALU_CUSTOM_LAYERS_ORIENTATION:
      return {
        ...state,
        orientation: {
          ...state.orientation,
          [action.windowId]: !state?.orientation?.[action.windowId]
        }
      };
    default:
      return state;
  }
};
