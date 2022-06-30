
export default {
  id: 'mirador-root',
  windows: [
    {
      manifestId: "https://miniatures.fitz.ms/mirador-demo/iiif/3868/manifest.json",
      maximized: true,
    }
  ],
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
    allowClose: false,
    defaultSideBarPanel: 'annotations',
    allowTopMenuButton: false,
    allowFullscreen: true,
    allowMaximize: false,
    panels: {
      info: true,
      attribution: true,
      canvas: false,
      annotations: true,
      search: false,
      layers: false,
    },
  },
  workspaceControlPanel: {
    enabled: false,
  },
  translations: {
    en: {
      openCompanionWindow_CustomLayers: 'Custom Layers'
    }
  }
};