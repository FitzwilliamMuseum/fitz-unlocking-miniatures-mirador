import React, { Component } from 'react'
import introJs from 'intro.js';
import 'intro.js/introjs.css';

const steps = [
    {
        element: 'button[role="tab"][aria-label="Annotations"]',
        title: 'Annotations',
        intro: 'View annotations and open micrograph images'
    },
    {
        element: 'button[role="tab"][aria-label="Layers"]',
        title: 'Layers',
        intro: 'Control opacity of individual layers'
    },
    {
        element: 'button[role="tab"][aria-label="Custom Layers"]',
        title: 'Custom Layers',
        intro: 'View layers side be side with the curtain slider'
    },
    {
        element: '.olamalu-navigation-controls',
        title: 'Navigation controls',
        intro: 'Zoom in and out with these controls, mouse scroll or touch input'
    },
    {
        element: '#addBtn[aria-label="Add resource"]',
        title: 'Add resource',
        intro: 'Add and compare another resource'
    }
];
let onboardingInterval = null;

function initOnboarding() {
    //Check elements are loaded
    if (!onboardingInterval || !document.querySelector(steps[0].element)) {
        return;
    }
    clearInterval(onboardingInterval);
    onboardingInterval = null;

    introJs().setOptions({
        steps,
    }).start();
}

export default class Onboarding extends Component {

    componentDidMount() {
        onboardingInterval = setInterval(() => {
            initOnboarding();
        }, 2000);
    }

    render() {
        return <React.Fragment></React.Fragment>
    }
}
