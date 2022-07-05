export const OLAMALU_CUSTOM_LAYERS_UPDATE_LAYERS = 'olamalu/custom_layers_update_layers';
export const OLAMALU_CUSTOM_LAYERS_ORIENTATION = 'olamalu/custom_layers_orientation';

export function updateCustomLayers(windowId, canvasId, payload) {
    return {
        canvasId: canvasId,
        payload: payload,
        type: OLAMALU_CUSTOM_LAYERS_UPDATE_LAYERS,
        windowId: windowId
    };
}

export function toggleOrientation(windowId) {
    return {
        type: OLAMALU_CUSTOM_LAYERS_ORIENTATION,
        windowId
    }
}