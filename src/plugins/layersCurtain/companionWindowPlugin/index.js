import List from './list';
import { updateLayersCurtain, toggleOrientation } from '../state/actions';
import { layersCurtainReducer } from '../state/reducers';
import { getVisibleCanvasIds, getSortedLayers, getLayers } from "mirador/dist/es/src/state/selectors"
import { updateLayers } from "mirador/dist/es/src/state/actions"

const mapStateToProps = (state, { windowId }) => {
    const canvasIds = getVisibleCanvasIds(state, { windowId });
    const canvasId = canvasIds[0];
    return {
        canvasId,
        customLayerMetadata: state?.layersCurtain?.[windowId]?.[canvasId],
        layers: getSortedLayers(state, { canvasId, windowId }),
        layerMetadata: getLayers(state, { canvasId, windowId }),
        layersOrientation: !!state.layersCurtain?.orientation?.[windowId],
    }
};

const mapDispatchToProps = {
    updateLayers,
    updateLayersCurtain,
    toggleOrientation
};

export default {
    companionWindowKey: 'LayersCurtain',
    component: List,
    mapDispatchToProps,
    mapStateToProps,
    reducers: {
        layersCurtain: layersCurtainReducer,
    },
};