export const OLAMALU_UPDATE_CUSTOM_LAYERS = 'olamalu/update_custom_layers';

export function updateCustomLayers(windowId, canvasId, payload) {
    return {
        canvasId: canvasId,
        payload: payload,
        type: OLAMALU_UPDATE_CUSTOM_LAYERS,
        windowId: windowId
    };
}