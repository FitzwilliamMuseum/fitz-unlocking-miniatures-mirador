# Fitzwilliam Miniatures Mirador viewer

http://miniatures-mirador.fitzmuseum.cam.ac.uk/

React app that wraps Miradar and adds the following plugins:

- Layers curtain `src/plugins/layersCurtain`
- Physical ruler `src/plugins/physicalRuler`

Physical ruler plugin based on https://github.com/ubleipzig/mirador-ruler-plugin

## Developing

Tested with Node version 16.15.1

```
yarn
yarn start
```

## Building

```
yarn
yarn build
```

Output dir `dist`

## URL Query parameters

Pass `manifestId[]` query parameters.

http://miniatures-mirador.fitzmuseum.cam.ac.uk/?manifestId[]=https://miniatures-iiif.fitzmuseum.cam.ac.uk/FM%203868/manifest.json&manifestId[]=https://miniatures-iiif.fitzmuseum.cam.ac.uk/FM%203869/manifest.json

## Onboardign

Onboardign is implemented as a React componet using https://introjs.com/.

Modify `steps` in `src/components/onboarding.js`.
