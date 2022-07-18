import React, { Component } from 'react';
import IIIFThumbnail from 'mirador/dist/es/src/containers/IIIFThumbnail';
import Slider from '@material-ui/core/Slider';
import DragHandleIcon from '@material-ui/icons/DragHandleSharp';
import VisibilityIcon from '@material-ui/icons/VisibilitySharp';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOffSharp';
import MoveToTopIcon from '@material-ui/icons/VerticalAlignTopSharp';
import IconButton from '@material-ui/core/IconButton';
import { MiradorMenuButton } from 'mirador/dist/es/src/components/MiradorMenuButton';
import { Draggable } from "react-beautiful-dnd";

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  background: isDragging ? "#ecececec" : "#ffffff",
  width: "100%",
  borderBottom: "0.5px solid rgba(0, 0, 0, 0.12)",
  paddingRight: "24px",
  display: "flex",
  ...draggableStyle
});

const imageStyle = {
  paddingRight: "4px"
}

const dragHandleWrapperStyle = {
  display: "flex",
  backgroundColor: "#f5f5f5",
  alignItems: "center",
  borderRight: "0.5px solid rgba(0, 0, 0, 0.12)"
}

const contentWrapperStyle = {
  padding: "16px 8px 8px 8px",
  width: "100%"
}

const itemDetailStyle = {
  display: "flex"
}

const ListItem = class extends Component {

  constructor(props) {
    super(props);
    this.handleclipChange = this.handleclipChange.bind(this);
  }


  handleclipChange(layerId, value) {
    const { canvasId, layersOpacityReset, updateCustomLayers, windowId } = this.props;

    //reset opacity of all layers
    layersOpacityReset();

    //update curtain
    const payloadCurtain = {
      [layerId]: { clip: value / 100.0 },
    };

    updateCustomLayers(windowId, canvasId, payloadCurtain);
  }


  render() {

    const { layer, resource, index, toggleLayerVisibility, moveToTop } = this.props;

    const width = 50;
    const height = undefined;

    return <Draggable
      key={layer.id}
      draggableId={layer.id}
      index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <div {...provided.dragHandleProps} style={dragHandleWrapperStyle}>
            <DragHandleIcon />
          </div>
          <div style={contentWrapperStyle}>
            <div style={itemDetailStyle}>
              <IIIFThumbnail
                maxHeight={height}
                maxWidth={width}
                resource={resource}
                style={imageStyle}
              />
              <div>
                <div>{layer.label || layer.id}</div>
                <MiradorMenuButton
                  size="small"
                  aria-label={layer.visibility ? 'Hide layer' : 'Show layer'}
                  onClick={toggleLayerVisibility}>
                  {layer.visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </MiradorMenuButton>
                {layer.index !== 0 && (
                  <MiradorMenuButton
                    size="small"
                    aria-label={'Move layer to top'}
                    onClick={moveToTop}>
                    <MoveToTopIcon />
                  </MiradorMenuButton>
                )}
              </div>
            </div>
            <Slider
              disabled={!layer.visibility}
              value={layer.clip * 100}
              onChange={(e, value) => this.handleclipChange(resource.id, value)}
            />
          </div>
        </div>
      )}
    </Draggable>
  }
}

export default ListItem;