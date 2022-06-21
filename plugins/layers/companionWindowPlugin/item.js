import React, { Component } from 'react';
import IIIFThumbnail from 'mirador/dist/es/src/containers/IIIFThumbnail';
import Slider from '@material-ui/core/Slider';
import DragHandleIcon from '@material-ui/icons/DragHandleSharp';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: 16,
  margin: `0 0 8px 0`,
  background: isDragging ? "#ecececec" : "#ffffff",
  width: "100%",
  ...draggableStyle
});

const ListItem = class extends Component {

  constructor(props) {
    super(props);
    this.handleclipChange = this.handleclipChange.bind(this);
  }


  handleclipChange(layerId, value) {
    const { canvasId, updateCustomLayers, windowId, } = this.props;

    const payload = {
      [layerId]: { clip: value / 100.0 },
    };

    updateCustomLayers(windowId, canvasId, payload);
  }


  render() {

    const { layer, resource, index } = this.props;

    const width = 50;
    const height = undefined;

    return <Draggable key={layer.id} draggableId={layer.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <div     {...provided.dragHandleProps}>
            <DragHandleIcon
            />
          </div>
          <div>{layer.label || layer.id}</div>
          <IIIFThumbnail
            maxHeight={height}
            maxWidth={width}
            resource={resource}
          />
          <Slider
            disabled={!layer.visibility}
            value={layer.clip * 100}
            onChange={(e, value) => this.handleclipChange(resource.id, value)}
          />
        </div>
      )}
    </Draggable>
  }

}

export default ListItem;