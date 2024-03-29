import React, { Component } from 'react'
import { render } from 'react-dom'
import mirador from "mirador";
import config from "./mirador-config.js";
import miradorPlugins from './plugins';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Onboarding from './components/onboarding.js';
import './index.css'

async function initMirador(manifestId) {
  const windows = [];
  if (Array.isArray(manifestId)) {
    manifestId.forEach(item => {
      windows.push({
        manifestId: item
      })
    })
  }
  const response = await fetch("https://unlocking-miniatures.fitz.ms/items/miniatures/?fields%5B%5D=accession_number");
  const data = (await response.json()).data;
  const urlSafeRegex = /[^a-zA-Z0-9_. ]/g;
  const catalog = data.map(item => {
    const urlSafeAccessionNumber = item.accession_number.replace(urlSafeRegex, '-');
    return {
      manifestId: `https://miniatures-iiif.fitzmuseum.cam.ac.uk/${urlSafeAccessionNumber}/manifest.json`
    }
  });
  if (windows.length < 1) {
    windows.push(catalog[0]);
  }
  mirador.viewer({
    ...config,
    windows,
    catalog
  }, miradorPlugins);
}

export default class App extends Component {

  componentDidMount() {
    let params = new URLSearchParams(document.location.search);
    let manifestId = params.getAll("manifestId[]");
    initMirador(manifestId);
  }

  render() {
    return <React.Fragment>
      <Header />
      <div className='main-content'>
        <div id={config.id} />
      </div>
      <Footer />
      <Onboarding />
    </React.Fragment>
  }
}

render(<App />, document.querySelector('#app'))
