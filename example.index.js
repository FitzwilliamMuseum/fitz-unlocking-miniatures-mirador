import Mirador from 'mirador';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
// import demoPlugin from './plugins/mirador-demo-plugin';
import brandingPlugin from './plugins/branding';
import rulerPlugin from './plugins/physical';
import layersPlugin from './plugins/layers';

const config = {
  id: 'demo',
  windows: [
    //   {
    //   // manifestId: 'https://iiif.lib.harvard.edu/manifests/drs:48309543',
    //   // manifestId: "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb00113391/manifest"
    //   manifestId: 'https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb00079445/manifest'
    //   // manifestId: "https://storiiies.cogapp.com/manifestJSON?manifest=https://storiiies.cogapp.com/holbein/manifest.json"
    // },
    // {
    //   manifestId: "https://storiiies.cogapp.com/manifestJSON?manifest=https://storiiies.cogapp.com/holbein/manifest.json"
    // },
    //physical ruler
    // {
    //   manifestId: "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb00113391/manifest"
    // },
    //annotations - with points
    // {
    //   manifestId: "https://iiif.harvardartmuseums.org/manifests/object/299843"
    // },
    //annotations - no points
    // {
    //   manifestId: "https://storiiies.cogapp.com/manifestJSON?manifest=https://storiiies.cogapp.com/holbein/manifest.json"
    // },
    //index
    // {
    //   manifestId: "https://iiif.biblissima.fr/chateauroux/B360446201_MS0005/manifest.json"
    // },
    //layers
    // {
    //   manifestId: "https://dms-data.stanford.edu/data/manifests/test/rivera/manifest2.json"
    // },
    //volumes
    // {
    //   manifestId: "https://iiif.wellcomecollection.org/presentation/v2/b18031511"
    // },
    //layers
    // {
    //   imageToolsEnabled: true,
    //   manifestId: "https://raw.githubusercontent.com/ProjectMirador/mirador/0c50b5b7fb4fdf2d5c583dcc84102963f430bf64/__tests__/fixtures/version-2/hamilton.json"
    // },
    //miniatures with layers
    {
      imageToolsEnabled: true,
      manifestId: "https://mebushnell.github.io/Miniatures-IIIF/manifests/manifest_3868_layers.json"
    },
    // {
    //   manifestId: "https://cloud.olamalu.com/s/HLcPBXEeN6s7j9q/download/manifest_3868_layers.json"
    // }
    // {
    //   manifestId: "https://iiif.bodleian.ox.ac.uk/iiif/manifest/748a9d50-5a3a-440e-ab9d-567dd68b6abb.json"
    // }
  ],
  theme: {
    palette: {
      primary: {
        main: '#1967d2',
      },
    },
  },
  window: {
    sideBarOpen: true,
    allowClose: false,
	defaultSideBarPanel: 'layers',
  },
  workspace: {
    showZoomControls: true,
      type: 'mosaic', // Which workspace type to load by default. Other possible values are "elastic"
    },
    workspaceControlPanel: {
      enabled: false,
    },
  requests: {
    postprocessors: [
      // Functions that receive HTTP responses and manipulates them before adding to store
      // An example of manipulating the response for an annotation request
      (url, action) => {
        if (action.annotationId) {
          // action.annotationJson = {};
          // action.annotationJson.resources.forEach((resource) =>{
          //   // resource.resource.selector = {
          //   //   "@context": "http://iiif.io/api/annex/openannotation/context.json",
          //   //   "@type": "iiif:ImageApiSelector",
          //   //   "region": "50,50,1250,1850"
          //   // }

          //   resource.on =
          //   {
          //     "@type": "oa:SpecificResource",
          //     "full": "https://iiif.harvardartmuseums.org/manifests/object/299843/canvas/canvas-47174896",
          //     "selector": {
          //       "@type": "oa:FragmentSelector",
          //       "value": "xywh=622,591,642,940"
          //     }
          //   }
          // })
          console.log("postProcess action", action);
        }
      }
    ]
  },
  translations: {
    en: {
      openCompanionWindow_CustomLayers: 'Custom Layers'
    }
  }
};

Mirador.viewer(config, [
  ...miradorImageToolsPlugin,
  // ...demoPlugin,
  brandingPlugin,
  rulerPlugin,
  ...layersPlugin
]);
