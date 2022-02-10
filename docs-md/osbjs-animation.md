---
name: Animation
---

# Animation
```typescript
const animation = new Animation(
	path: string,
	layer: Layer,
	origin: Origin = Origin.Center,
	frameCount: number,
	frameDelay: number,
	initialPosition: OsbVector2 = new OsbVector2(320, 480),
	loopType: LoopType | string = LoopType.LoopForever
)
```

Create a new animation. A animation is also a component, therefore you can register it to storyboard directly, or add it to another components.

* **path**: path to the image file relative to the beatmap folder. For example, specify a filename like "sliderball.png", and name your files "sliderball0.png" to "sliderball9.png" for a 10 frame animation.
* **layer**: [Layer](/docs/osbjs-enums)
* **origin**: [Origin](/docs/osbjs-enums)
* **frameCount**: number of frames in the animation.
* **frameDelay**: delay in milliseconds between each frame.
* **initialPosition**: the initial position of the image.
* **loopType**: [LoopType](/docs/osbjs-enums)

Animation has all of [Sprite](/docs/osbjs-sprite)'s methods.
