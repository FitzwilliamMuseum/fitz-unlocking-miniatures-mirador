
//https://github.com/ProjectMirador/mirador/blob/master/src/config/settings.js

export default {
  id: 'mirador-root',
  windows: [
    {
      manifestId: "https://miniatures.fitz.ms/mirador-demo/iiif/3868/manifest.json",
      maximized: false,
    },
    {
      manifestId: "https://miniatures.fitz.ms/mirador-demo/iiif/3869/manifest.json",
      maximized: false,
    },
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
    allowClose: true,
    defaultSideBarPanel: 'info',
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
  workspaceControlPanel: {
    enabled: true,
  },
  translations: {
    en: {
      openCompanionWindow_CustomLayers: 'Custom Layers'
    }
  }
};