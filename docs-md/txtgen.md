---
name: Texture generator
---

# Texture generator

## Example
```js
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
