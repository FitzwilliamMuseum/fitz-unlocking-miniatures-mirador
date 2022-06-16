import List from './list';
import {updateCustomLayers} from '../state/actions';
import { customLayersReducer } from '../state/reducers';
import {getVisibleCanvasIds,getSortedLayers} from "mirador/dist/es/src/state/selectors"
import {updateLayers} from "mirador/dist/es/src/state/actions"

const mapStateToProps = (state, { id, windowId }) => {
    const canvasIds = getVisibleCanvasIds(state, { windowId });
    const canvasId = canvasIds[0];
    return {
        state,
        canvasId,
        canvasIds,
        layerMetadata: state?.customLayers?.[windowId]?.[canvasId],
        layers: getSortedLayers(state, { canvasId, windowId }),
    }
};

const mapDispatchToProps = {
    updateLayers: updateLayers,
    updateCustomLayers: updateCustomLayers,
};

export default {
    companionWindowKey: 'CustomLayers',
    component: List,
    mapStateToProps,
    mapDispatchToProps,
    reducers: {
        customLayers: customLayersReducer,
    },
};