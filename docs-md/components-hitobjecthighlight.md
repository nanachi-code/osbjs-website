---
name: HitObjectHighlight | components
---

# HitObjectHighlight
```typescript
const highlight = new HitObjectHighlight(
	osbPath: string,
	startTime: number | string,
	endTime: number | string,
	beatmap: Beatmap, // from osujs
	options?: HitObjectHighlightOptions
)
```

Highlight every objects inbetween start and end time.

* **osbPath**: relative path to image file used to highlight. For example, if you have a folder named `sb` inside your beatmap folder and your `highlight.png` is in it, then it should be `sb/highlight.png`
* **startTime**/**endTime**: times in milliseconds/timestamp indicate the start/end time of the section you want to highlight.
* **beatmap**: Beatmap instance of difficulty you want to use
* **options**: Avaiable options:
```typescript
interface HitObjectHighlightOptions {
	endScale: number // default: 1
	startScale: number // default: 1.2
	fadeDuration: number // default: 200
	beatDivisor: number // the higher the more precise. default: 8
	followSliderPath: boolean // default: true
}
```

## Example
```javascript
const beatmapPath = "D:/osu!/Songs/map_folder/map.osu"
const beatmap = new Beatmap(beatmapPath)
const highlight = new HitObjectHighlight("sb/circle.png", 1000, 5000, beatmap, {
	startScale: 1,
	endScale: 1.2,
	followSliderPath: true
})

scene.registerComponents(highlight)
```
