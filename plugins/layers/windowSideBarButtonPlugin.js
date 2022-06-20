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
    return <img src="splitscreen_black_24dp.svg" alt="Custom Layers" />

  }
}

Layers.value = 'CustomLayers';

export default {
  name: 'CustomLayers',
  target: 'WindowSideBarButtons',
  component: Layers,
  mode: 'add',
};
