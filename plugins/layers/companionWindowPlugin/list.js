import React, { Component } from 'react';
import CompanionWindow from 'mirador/dist/es/src/containers/CompanionWindow';
import LayerListItem from './item';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import FlipIcon from '@material-ui/icons/Flip';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const orientationStyle = {
    paddingLeft: "16px"
}

const listStyle = {
    padding: "0px",
    height: "70vh"
}

const listItemStyle = {
    padding: "0px"
}

const Layers = class extends Component {

    constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.droppableId = "droppable";
    }

    onDragEnd(result) {
        const {
            canvasId, layers, updateLayers, windowId,
        } = this.props;
        if (!result.destination) return;
        if (result.destination.droppableId !== this.droppableId) return;
        if (result.source.droppableId !== this.droppableId) return;

        const sortedLayers = reorder(
            layers.map(l => l.id),
            result.source.index,
            result.destination.index,
        );

        const payload = layers.reduce((acc, layer) => {
            acc[layer.id] = { index: sortedLayers.indexOf(layer.id) };
            return acc;
        }, {});

        updateLayers(windowId, canvasId, payload);
    }

    render() {
        const { canvasId,
            id,
            windowId,
            layerMetadata,
            layers,
            updateCustomLayers,
            toggleOrientation,
            layersOrientation
        } = this.props;

        return <div>
            <CompanionWindow
                title="Custom Layers"
                windowId={windowId}
                id={id}
            >
                <div style={orientationStyle}>
                    <span>Orientation</span>
                    <IconButton onClick={toggleOrientation}>
                        <FlipIcon
                            aria-label="layers orientation"
                            disabled color="primary"
                            style={{ transform: !!layersOrientation ? "rotate(90deg)" : "" }}
                        />
                    </IconButton>
                </div>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId={this.droppableId}>
                        {(provided, snapshot) => (
                            <List
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={listStyle}
                            >

                                {layers.map((resource, index) => {
                                    const layer = {
                                        clip: 1,
                                        visibility: true,
                                        id: resource.id,
                                        label: resource?.__jsonld?.label?.en?.[0],
                                        ...(layerMetadata || {})[resource.id],
                                    };

                                    return <ListItem style={listItemStyle}>
                                        <LayerListItem
                                            index={index}
                                            layer={layer}
                                            resource={resource}
                                            windowId={windowId}
                                            canvasId={canvasId}
                                            updateCustomLayers={updateCustomLayers}
                                        ></LayerListItem>
                                    </ListItem>

                                })}
                                {provided.placeholder}
                            </List>
                        )}
                    </Droppable>
                </DragDropContext>
            </CompanionWindow>
        </div>
    }
}

export default Layers;
