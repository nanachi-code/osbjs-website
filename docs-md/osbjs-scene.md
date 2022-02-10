---
name: Scene
---

# Scene
An "empty" [Component](/docs/osbjs-component). Its purpose is to make working with groups of components syntactically clearer.

Example:
```javascript
const { Scene } = require('@osbjs/osbjs')
const { Flash } = require('./components/Flash')

module.exports = class Intro extends Scene {
	constructor(startTime, endTime) {
		this.startTime = startTime
		this.endTime = endTime
	}

	generate() {
		const fl = new Flash(1000, 2000)
		this.registerComponents(fl)
	}
}
```
