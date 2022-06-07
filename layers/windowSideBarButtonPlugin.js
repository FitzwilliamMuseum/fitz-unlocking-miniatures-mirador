import React, { Component } from 'react'
  
  const Layers = class extends Component {
  
    constructor(props) {
      super(props);
    }
  
    componentDidMount() {
    }
  
    componentDidUpdate(prevProps) {
    }
  
    render() {
      return  <span id="custom-side-panel-a-button">😀</span>
    }
  }

  Layers.value = 'CustomLayers';

export default {
    name: 'CustomLayers',
    target: 'WindowSideBarButtons',
    component: Layers,
    mode: 'add',
  };
  