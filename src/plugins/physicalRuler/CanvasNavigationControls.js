import React from 'react'
import { getShowZoomControlsConfig, getViewer } from 'mirador/dist/es/src/state/selectors';
import * as actions from 'mirador/dist/es/src/state/actions';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RestoreZoomIcon from 'mirador/dist/es/src/components/icons/RestoreZoomIcon';
import IconButton from '@material-ui/core/IconButton';

const mapStateToProps = (state, { windowId }) => (
    {
        showZoomControls: getShowZoomControlsConfig(state),
        viewer: getViewer(state, { windowId }),
    }
);

const mapDispatchToProps = { updateViewport: actions.updateViewport };

function WindowCanvasNavigationControls(props) {

    const { windowId, updateViewport, viewer, showZoomControls, zoomToWorld } = props;

    if (!showZoomControls) return <></>


    function onClickZoomIn() {
        updateViewport(windowId, {
            zoom: viewer.zoom * 2,
        });
    }

    function onClickZoomOut() {
        updateViewport(windowId, {
            zoom: viewer.zoom / 2,
        });
    }

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute',
        right: 0,
        height: '100%',
        margin: '8px',
    }}>
        <div
            className='olamalu-navigation-controls'
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '50px',
                zIndex: 50,
            }}>
            <IconButton aria-label="Zoom in" onClick={onClickZoomIn}><AddIcon /></IconButton>
            <IconButton aria-label="Zoom out" onClick={onClickZoomOut}><RemoveIcon /></IconButton>
            <IconButton aria-label="Recet zoom" onClick={zoomToWorld}><RestoreZoomIcon /></IconButton>
        </div>
    </div>;
}

export default {
    name: 'CustomWindowCanvasNavigationControls',
    target: 'WindowCanvasNavigationControls',
    component: WindowCanvasNavigationControls,
    mapStateToProps,
    mapDispatchToProps,
    mode: 'wrap',
};
