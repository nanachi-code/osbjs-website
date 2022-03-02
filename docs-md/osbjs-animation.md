---
name: Animation
---

# Animation
```typescript
const animation = new Animation(
	path: string,
	frameCount: number,
	frameDelay: number,	
	loopType: LoopType | string = LoopType.LoopForever
	layer: Layer = = Layer.Background,
	origin: Origin = Origin.Center,
	initialPosition: OsbVector2 = new OsbVector2(320, 480),
)
```

Create a new animation. An animation is also a component, therefore you can register it to storyboard directly, or add it to another components.

* **path**: path to the image file relative to the beatmap folder. For example, specify a filename like "sliderball.png", and name your files "sliderball0.png" to "sliderball9.png" for a 10 frame animation.
* **frameCount**: number of frames in the animation.
* **frameDelay**: delay in milliseconds between each frame. 
* **loopType**: [LoopType](/docs/osbjs-enums)
* **layer**: [Layer](/docs/osbjs-enums)
* **origin**: [Origin](/docs/osbjs-enums)
* **initialPosition**: the initial position of the image.

Animation has all of [Sprite](/docs/osbjs-sprite)'s methods.
