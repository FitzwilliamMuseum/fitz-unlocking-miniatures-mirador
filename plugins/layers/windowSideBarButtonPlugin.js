import React, { Component } from 'react';

const contentId = "CustomLayers";

function compationWindowActive(state) {
  return Object.values(state.companionWindows)
    .filter(item => item.position === "left")?.[0]?.content === contentId;
}

const mapStateToProps = (state) => {
  return {
    compationWindowActive: compationWindowActive(state),
  }
};

function Icon() {
  return <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" ><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><g><path d="M18,4v5H6V4H18 M18,2H6C4.9,2,4,2.9,4,4v5c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,15v5H6v-5H18 M18,13H6c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-5C20,13.9,19.1,13,18,13z" /></g></g></svg>
}

const Layers = class extends Component {

  render() {
    const { compationWindowActive } = this.props;
    return <div style={{
      display: "flex",
      fill: compationWindowActive ? "#000000" : "#757575"
    }}>
      <Icon />
    </div>
  }
}

Layers.value = contentId;

export default {
  name: contentId,
  target: 'WindowSideBarButtons',
  component: Layers,
  mode: 'add',
  mapStateToProps,
};
