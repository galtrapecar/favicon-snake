# Favicon Snake

Favicon Snake 🐍

!(gif)[./img/gif.gif]

Preview at: https://htmlpreview.github.io/?https://raw.githubusercontent.com/galtrapecar/favicon-snake/main/index.html

Inspirations and Credits:
Code References:
- Favicon setting logic by Mashpoe : https://github.com/Mashpoe/favicon-dino-game/blobmaster/index.html
- Simple Snake game logic by Chris DeLeon : https://pastebin.com/Z3zhb7cY
- Canvas Scaling CSS by Benno Daenen : https://itch.io/jam/lowrezjam2016/topic/19730/solved-html5-canvas-scaling-nearest-neighbor-no-blur

Design Resources:
- Apple sprite inspired by Minecraft : https://www.minecraft.net/en-us
- ASCII Fonts by : https://www.coolgenerator.com/ascii-text-generator
- Noto Sans font by Google : https://fonts.google.com/noto/specimen/Noto+Sans
- Quicksand font by Google : https://fonts.google.com/specimen/Quicksand
- Website SVG icon : https://www.reshot.com/free-svg-icons/item/internet-UZ3YB865ED/
- Github SVG icon by Github (duh)

Special Thanks:
- Thank you to my gf for drawing the dying snake animation💜

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
