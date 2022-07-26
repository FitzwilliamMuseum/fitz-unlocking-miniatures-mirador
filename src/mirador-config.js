
//https://github.com/ProjectMirador/mirador/blob/master/src/config/settings.js

export default {
  id: 'mirador-root',
  windows: [],
  selectedTheme: 'fitzwilliam',
  themes: {
    fitzwilliam: {
      palette: {
        type: 'light',
        primary: {
          main: '#000000',
        },
        shades: {
          dark: '#000000', //canvase background
        },
      },
    }
  },
  window: {
    sideBarOpen: true,
    allowClose: true,
    defaultSideBarPanel: 'LayersCurtain',
    allowTopMenuButton: false,
    allowFullscreen: true,
    allowMaximize: true,
    panels: {
      info: true,
      attribution: true,
      canvas: false,
      annotations: true,
      search: false,
      layers: true,
    },
  },
  workspace: {
    showZoomControls: true,
  },
  workspaceControlPanel: {
    enabled: true,
  },
  translations: {
    en: {
      openCompanionWindow_LayersCurtain: 'Layers Curtain',
      addManifestUrlHelp: 'The URL of a IIIF resource manifest (JSON file). Copy and paste it here',
    }
  },
  requests: {
    postprocessors: [
      //Mutate network request responses
      (url, action) => {
        if (action.json && action.json['@context'] == 'http://iiif.io/api/image/3/context.json') {
          //Ensure image info ids are using https
          action.json.id = action.json.id.replace("http://", "https://")
        }
      }
    ]
  },
  catalog: []
};