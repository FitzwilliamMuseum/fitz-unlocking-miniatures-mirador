import React, { Component } from 'react'
import { addWindow } from "mirador/dist/es/src/state/actions"

const AnnotationMicrograph = class extends Component {

    constructor(props) {
        super(props);
        this.onClickMiradorLink = this.onClickMiradorLink.bind(this);
    }

    miradorLinkCSSSelector = 'aside[aria-label="Annotations"] li a';

    onClickMiradorLink(event) {
        const { addWindow } = this.props;
        event.preventDefault();
        addWindow({ manifestId: event.target.href });
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const { TargetComponent, targetProps } = this.props;

        document.querySelectorAll(this.miradorLinkCSSSelector).forEach((element) => {
            if (element.innerHTML === 'Open in Mirador') {
                window.removeEventListener('scroll', this.onClickMiradorLink);
                element.addEventListener('click', this.onClickMiradorLink);
            }
        });

        return <TargetComponent {...targetProps} />;
    }
}

const mapDispatchToProps = {
    addWindow
};

export default {
    name: 'AnnotationMicrograph',
    target: 'CanvasAnnotations',
    component: AnnotationMicrograph,
    mapDispatchToProps,
    mode: 'wrap',
};
