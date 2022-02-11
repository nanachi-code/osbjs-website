---
name: Lyrics | components
---

# Lyrics

```typescript
new Lyrics(
	folderPath: string,
	osbFolderPath: string,
	subtitlePath: string,
	options?: LyricsOptions,
	registerFontOptions?: FontOptions)
```

Generate lyrics from a `.srt`/`.vtt` file.

* **folderPath**: full path to beatmap folder
* **osbFolderPath**: relative path to the folder that will be used to save generated text images. For example: `sb/lyrics`
* **subtitlePath**: full path to the subtitle file. For example, `./lyrics.srt` if your lyrics file is same folder with your script file.
* **options**: Avaiable options:
```typescript
interface LyricsOptions {
	fadeDuration: number // default: 200
	opacity: number // default: 1
	fontName: string // default: "Arial"
	fontSize: number // default: 72
	fontScale: number // default: 1
	perCharacter: boolean // set to true if you want to generate image for each character. default: false
	y: number // default: 400
	additive: boolean // default: true
	color: IColor // default: {r: 255, g: 255, b: 255}
}
```

* **registerFontOptions**: in case you want to use a non-system font.
```typescript
interface FontOptions {
	fontPath: string // full path to font file
	family: string // font family name
}
```

## Example
```javascript
const { Lyrics } = require("@osbjs/components")

const folderPath = "D:/osu!/Songs/map_folder"
const lyrics = new Lyrics(folderPath, "sb/lyrics", "./lyrics.srt", {
	perCharacter: true,
	fontName: "Nexa"
}, {
	fontPath: "./Nexa.otf",
	family: "Nexa"
})

scene.registerComponents(lyrics)
```
