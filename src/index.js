import React, { Component } from 'react'
import { render } from 'react-dom'
import mirador from "mirador";
import config from "./mirador-config.js";
import miradorPlugins from './plugins';
import Header from './components/header.js';
import Footer from './components/footer.js';
import './index.css'

export default class App extends Component {

  componentDidMount() {
    mirador.viewer(config, miradorPlugins);
  }

  render() {
    return <React.Fragment>
      <Header />
      <div className='main-content'>
        <div id={config.id} />
      </div>
      <Footer />
    </React.Fragment>
  }
}

render(<App />, document.querySelector('#app'))
