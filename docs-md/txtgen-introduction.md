---
name: txtgen
---

# txtgen

Text image generator for osbjs

*Note*: `txtgen` uses `node-canvas` for generating image so make sure you have `node-gyp` installed. Read [this section](https://github.com/nodejs/node-gyp#installation) for more info on how to install `node-gyp` for your operating system.


## Install
```bash
npm i @osbjs/txtgen
```

## Example
```js
const { Texture, TextureGenerator} = require("@osbjs/txtgen")
const { Sprite, Origin, Layer } = require("@osbjs/osbjs")

const folderPath = ""
const txtGen = new TextureGenerator(folderPath, "sb/lyrics")

let line = {
	text: "Hello",
	startTime: 1000,
	endTime: 2000
}

let texture = txtGen.generateTexture(line.text)

let sprite = new Sprite(texture.osbPath, Layer.Background, Origin.Center, {
	x: 320,
	y: 400,
})

sprite.ScaleAtTime(line.startTime, 1)
sprite.Fade(line.startTime - 200, line.startTime, 0, 1)
sprite.Fade(line.endTime - 200, line.endTime, 1, 0)
```
