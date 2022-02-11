---
name: Background | components
---

# Background

```typescript
const bg = new Background(
	osbPath: string,
	folderPath: string,
	startTime: number | string,
	endTime: number | string,
	opacity: number = 0.8,
	fadeDuration: number = 500
)
```

Set background between start and end time.

* **osbPath**: relative path to image file. For example, if you have a folder named `sb` inside your beatmap folder and your `image.jpg` is in it, then it should be `sb/image.jpg`
* **folderPath**: full path to beatmap folder
* **startTime**/**endTime**: times in milliseconds/timestamp indicate when the image will be shown.
* **opacity**: opacity of the image
* **fadeDuration**: how long (in milliseconds) should the image start fading in/out

## Example
```javascript
const { Background } = require("@osbjs/components")
const folderPath = "D:/osu!/Songs/map_folder"
const bg = new Background("sb/bg.jpg", folderPath, 1000, 2000, 1, 200)

scene.registerComponents(bg)
```
