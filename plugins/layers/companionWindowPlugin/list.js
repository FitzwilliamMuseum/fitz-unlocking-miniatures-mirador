import React, { Component } from 'react';
import CompanionWindow from 'mirador/dist/es/src/containers/CompanionWindow';
import LayerListItem from './item';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const Layers = class extends Component {

    constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.droppableId = "droppable";
    }

    onDragEnd(result) {
        console.log("onDragEnd", result)
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

        console.log("payload", payload)
        updateLayers(windowId, canvasId, payload);
    }

    render() {
        const { canvasId, id, windowId, layerMetadata, layers, updateCustomLayers } = this.props;
        const { width, height } = { height: undefined, width: 50 };

        return <div>
            <CompanionWindow
                title="Custom SidePanel Plugin B"
                windowId={windowId}
                id={id}
            >
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId={this.droppableId}>
                        {(provided, snapshot) => (
                            <List
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >

                                {layers.map((resource, index) => {
                                    const layer = {
                                        opacity: 1,
                                        visibility: true,
                                        id: resource.id,
                                        ...(layerMetadata || {})[resource.id],
                                    };

                                    return <ListItem>
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
