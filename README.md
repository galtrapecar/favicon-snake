# Favicon Snake

Snake Game Playable In Browser Tab Icon

Inspirations and Credits:
- Apple sprite inspired by Minecraft : https://www.minecraft.net/en-us
- ASCII Fonts by : https://www.coolgenerator.com/ascii-text-generator
- Favicon setting logic by Mashpoe : https://github.com/Mashpoe/favicon-dino-game/blobmaster/index.html
- Simple Snake game logic by Chris DeLeon : https://pastebin.com/Z3zhb7cY
- Canvas Scaling CSS by Benno Daenen : https://itch.io/jam/lowrezjam2016/topic/19730/solved-html5-canvas-scaling-nearest-neighbor-no-blur
- Noto Sans font by Google : https://fonts.google.com/noto/specimen/Noto+Sans
- Quicksand font by Google : https://fonts.google.com/specimen/Quicksand

# USAGE FOR img_to_dataURI.js SCRIPT

Node script loops through all files in the specified folder and returns an array of objects in a seperate file.

dataURIs.js: 
```javascript
export default [{ file: file_name, URI: data_URI }, ...]
```

Usage in console:

```console
    DIR_PATH=(relative path to folder of images) OUTPUT_NAME=(output file name) node img_to_dataURI.js
```