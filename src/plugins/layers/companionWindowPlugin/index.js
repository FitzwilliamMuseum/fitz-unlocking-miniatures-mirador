import List from './list';
import { updateCustomLayers, toggleOrientation } from '../state/actions';
import { customLayersReducer } from '../state/reducers';
import { getVisibleCanvasIds, getSortedLayers } from "mirador/dist/es/src/state/selectors"
import { updateLayers } from "mirador/dist/es/src/state/actions"

const mapStateToProps = (state, { windowId }) => {
    const canvasIds = getVisibleCanvasIds(state, { windowId });
    const canvasId = canvasIds[0];
    return {
        canvasId,
        layerMetadata: state?.customLayers?.[windowId]?.[canvasId],
        layers: getSortedLayers(state, { canvasId, windowId }),
        layersOrientation: !!state.customLayers?.orientation?.[windowId],
    }
};

const mapDispatchToProps = {
    updateLayers,
    updateCustomLayers,
    toggleOrientation
};

export default {
    companionWindowKey: 'CustomLayers',
    component: List,
    mapDispatchToProps,
    mapStateToProps,
    reducers: {
        customLayers: customLayersReducer,
    },
};