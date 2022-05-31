# Favicon Snake

Snake Game Playable In Browser Tab Icon

Inspirations and Credits:
- Apple sprite inspired by Minecraft ( https://www.minecraft.net/en-us )
- ASCII Fonts by : https://www.coolgenerator.com/ascii-text-generator
- Favicon setting logic by Mashpoe : https://github.com/Mashpoe/favicon-dino-game/blob/master/index.html

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