import React, { Component } from 'react';
import {getPresentAnnotationsOnSelectedCanvases} from 'mirador/dist/es/src/state/selectors';

const mapStateToProps = (state, { windowId }) => ({
    annotations: getPresentAnnotationsOnSelectedCanvases(state, { windowId })
  });

/**
 * Represents a OpenSeadragonViewer in the mirador workspace. Responsible for mounting
 * and rendering OSD.
 */
class AnnotationsOverlay extends Component {

    render() {
        const {annotations} = this.props;
        return <div>Annotation!</div>
    }
}

export default {
    target: 'AnnotationsOverlay',
    component: AnnotationsOverlay,
    mapStateToProps,
    mode: 'wrap',
  };