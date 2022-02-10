---
name: Component
---

# Component

Abstract class. To create your own component, extend this class.

## Instance methods

### `registerComponents`
```typescript
component.registerComponents(...components: Component[])
```
Register components to this component. You can supply as many components as you want. Note: later component will have higher z-index therefore it might appear on top of earlier components if their active time overlap.

### `generate`
This function will be called internally. By default this function doesn't do anything, its purpose is to add logic to extended component.
If you create new sprites/animations inside `generate` function, make sure to register them.

Example:
```javascript
const { Component, Sprite, Layer, OsbVector2 } = require('@osbjs/osbjs')

module.exports = class Flash extends Component {
	constructor(startTime, endTime) {
		this.startTime = startTime
		this.endTime = endTime
	}

	generate() {
		let fl = new Sprite('sb/dot.png', Layer.Background)
		fl.ScaleVecAtTime(this.startTime, new OsbVector2(854, 480))
		fl.Fade(this.startTime, this.endTime, 1, 0) 
		this.registerComponents(fl)
	}
}
```
