import React, { Component } from 'react';
import CompanionWindow from 'mirador/dist/es/src/containers/CompanionWindow';
import {
    getVisibleCanvasIds,
    getLayers,
    getSortedLayers,
} from 'mirador/dist/es/src/state/selectors';
import IIIFThumbnail from 'mirador/dist/es/src/containers/IIIFThumbnail';
import Slider from '@material-ui/core/Slider';
import * as actions from 'mirador/dist/es/src/state/actions';
import { customLayersReducer } from './state/reducers';
import { updateCustomLayers } from './state/actions';

const mapStateToProps = (state, { id, windowId }) => {
    const canvasIds = getVisibleCanvasIds(state, { windowId });
    const canvasId = canvasIds[0];
    return {
        state,
        canvasId,
        canvasIds,
        layerMetadata: state.customLayers?.[windowId]?.[canvasId],
        layers: getSortedLayers(state, { canvasId, windowId }),
    }
};

const mapDispatchToProps = {
    updateLayers: actions.updateLayers,
    updateCustomLayers: updateCustomLayers
};

const Layers = class extends Component {

    constructor(props) {
        super(props);
        this.handleOpacityChange = this.handleOpacityChange.bind(this);
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
        const { canvasIds, id, windowId } = this.props;
        // console.log('componentDidUpdate', this.props)
    }

    handleOpacityChange(layerId, value) {
        const { canvasId, updateCustomLayers, windowId, } = this.props;

        const payload = {
            [layerId]: { opacity: value / 100.0 },
        };

        updateCustomLayers(windowId, canvasId, payload);
    }

    render() {
        // console.log("props", this.props);
        const { canvasIds, id, windowId, layerMetadata, layers } = this.props;
        const { width, height } = { height: undefined, width: 50 };

        return <div>
            <CompanionWindow
                title="Custom SidePanel Plugin B"
                windowId={windowId}
                id={id}
            >
                {layers.map((resource, index) => {
                    const layer = {
                        opacity: 1,
                        visibility: true,
                        ...(layerMetadata || {})[resource.id],
                    };
                    return <div>
                        <IIIFThumbnail
                            maxHeight={height}
                            maxWidth={width}
                            resource={resource}
                        />
                        <Slider
                            disabled={!layer.visibility}
                            value={layer.opacity * 100}
                            onChange={(e, value) => this.handleOpacityChange(resource.id, value)}
                        />
                    </div>
                })}
            </CompanionWindow>
        </div>
    }
}

export default {
    companionWindowKey: 'CustomLayers',
    component: Layers,
    mapStateToProps,
    mapDispatchToProps,
    reducers: {
        customLayers: customLayersReducer,
    },
};
