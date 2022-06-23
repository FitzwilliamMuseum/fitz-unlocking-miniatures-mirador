import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import RulerIcon from '@material-ui/icons/Straighten';
import { DocumentRuler } from './DocumentRuler';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => {
    return {
        root: {
            borderRadius: 25,
            position: 'absolute',
            top: 64,
            right: 8,
            zIndex: 999,
            display: 'flex',
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
    };
};

const PhysicalRuler = class extends Component {

    constructor(props) {
        super(props);
        this.onMenuButtonClicked = this.onMenuButtonClicked.bind(this);
        this.show = false;
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
        const { viewer } = this.props;
        if (viewer) this.attachRuler();
    }

    attachRuler() {
        const { viewer, canvasWorld } = this.props;
        const service = canvasWorld?.canvases[0]?.canvas?.__jsonld?.service;
        if (service && service.profile === 'http://iiif.io/api/annex/services/physdim') {
            const millimetersPerPhysicalUnit = {
                cm: 10.0,
                in: 25.4,
                mm: 1.0,
            };
            const pixelsPerMillimeter = 1 / (millimetersPerPhysicalUnit[service.physicalUnits] * service.physicalScale);

            this.ruler = this.ruler || new DocumentRuler({
                 viewer,
                  show: true, 
                 location: 'bottom-left' ,
                 labelsEvery: 1
                });
            this.ruler.PixelsPerMillimeter = pixelsPerMillimeter;
            this.ruler.register();

            viewer.addHandler('tile-loaded', (obj) => {
                this.ruler.updateSize();
                this.ruler.refresh(obj.tiledImage);
            });

            this.show = true;
        }
    }

    onMenuButtonClicked(event) {
        if (this.show) {
            this.show = false;
            this.ruler.hide();
        } else {
            this.show = true;
            this.ruler.show();
        }
    }

    render() {
        const {
            show,
            classes
        } = this.props;

        return <div className={`MuiPaper-elevation4 ${classes.root}`}>
            <IconButton
                onClick={this.onMenuButtonClicked}>
                <RulerIcon title={show ? 'show ruler' : 'hide ruler'} />
            </IconButton>
        </div>
    }
}

export default {
    name: 'PhysicalRuler',
    target: 'OpenSeadragonViewer',
    component: withStyles(styles)(PhysicalRuler),
    mode: 'add',
};
