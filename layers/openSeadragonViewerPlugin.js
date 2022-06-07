import React, { Component } from 'react'
import { getSortedLayers, getVisibleCanvasIds } from 'mirador/dist/es/src/state/selectors';
import OpenSeadragon from 'openseadragon';

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

const Layers = class extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
    const { viewer: { world }, layerMetadata } = this.props;
    if (!world || !layerMetadata) return;

    const items = [];
    for (let i = 0; i < world.getItemCount(); i += 1) {
      items.push(world.getItemAt(i));
    }

    items.forEach((item, i) => {
      let layer = { opacity: 1 };
      //The layer keys in OpenSeadragon are shorter, not sure why.
      //Should be a better way to index layers.
      const layerMetadataKeys = Object.keys(layerMetadata);
      for (let i = 0; i < layerMetadataKeys.length; i++) {
        if (layerMetadataKeys[i].indexOf(item.source['@id']) == 0) {
          layer = layerMetadata[layerMetadataKeys[i]];
          break;
        }
      }
      const imageSize = item.getContentSize();
      const rect = new OpenSeadragon.Rect(0, 0, imageSize.x * layer.opacity, imageSize.y);
      item.setClip(rect);
    });
  }

  render() {
    return <span></span>
  }
}

export default {
  target: 'OpenSeadragonViewer',
  component: Layers,
  mapStateToProps: mapStateToProps,
  mode: 'add',
};
