---
name: Introducing components
---

# Introducing components

## What is it?
Let say you are building a really big storyboard project with tons of effects like lyrics, hit object highlights, background changes etc..., if you only write it all in index.js file, you will have a really hard time managing or debug if something breaks. Components let you split the code into multiple independent and reusable pieces, and make your life much more easier. They are extremely helpful when it comes to creating and managing complicated effects with a lot of sprites, or even groups of effects, if you want.

To create a new component, just extends [`Component`](/docs/osbjs-component) class

## Example
Let's build a component that adds some stars to the screen.

We'll use this [image](https://nanachicode.s-ul.eu/fqletM1x) for this example. Create a `sb` folder inside your beatmap folder (not project folder) and save it there.

(Assuming you have installed osbjs for your project) Create `index.js` file and add the following code:
```javascript
const { Storyboard } = require('@osbjs/osbjs')
// Make sure to change the osb filename and path
const sb = new Storyboard('osb_filename.osb', 'path/to/beatmap/folder')

sb.generate()
```

Create a new file called `Stars.js` and place it under `components` folder.
```
- components
-- Stars.js
- index.js
```

Open the file and add the following code:

```javascript
const { Component } = require('@osbjs/osbjs')

class Stars extends Component {
	constructor(startTime, endTime, amount) {
		super()
		this.startTime = startTime
		this.endTime = endTime
		this.amount = amount
	}

	generate() {

	}
}

module.exports = Stars
```

Let's add some logic. It *must* be inside of the `generate` method for it to work.

```javascript
const { Component, Layer, Sprite } = require('@osbjs/osbjs')
const { randomInt } = require('crypto')
// We'll use crypto's built-in function to get random integer
// crypto is shipped with node so you don't have to install anything

class Stars extends Component {
	constructor(startTime, endTime, amount) {
		super()
		this.startTime = startTime
		this.endTime = endTime
		this.amount = amount
	}

	generate() {
		for(let i = 0; i < this.amount; i++) {
			let posYStart = randomInt(100, 300),
				posYEnd = posYStart + 20,
				posXStart = randomInt(500, 700),
				posXEnd = posXStart - 70

			let star = new Sprite('sb/star.png', Layer.Background)
			star.ScaleAtTime(this.startTime, 0.03)
			star.Fade(this.startTime, this.startTime + 200, 0, 1)
			star.Fade(this.endTime, this.endTime + 200, 1, 0)
			star.MoveY(this.startTime, this.endTime, posYStart, posYEnd, Easing.OutCirc)
			star.MoveX(this.startTime, this.endTime, posXStart, posXEnd, Easing.OutCirc)
			star.Rotate(this.startTime, this.endTime, Math.PI * 2, 0, Easing.OutCirc)
			// make sure to register everytime you create a sprite
			this.registerComponents(star)
		}
	}
}

module.exports = Stars
```

Now let's open the `index.js` file and use it:

```javascript
const { Storyboard } = require('@osbjs/osbjs')
const { Stars } = require('./components/Stars')

// Make sure to change the osb filename and path
const sb = new Storyboard('osb_filename.osb', 'path/to/beatmap/folder')

// Register the star component
sb.registerComponents(new Stars(0, 10000, 5))

sb.generate()
```

After you build your storyboard you will now see the beautiful ☄️ effect!

## Next step... Wait that's it?!
Yes that's it! Creating storyboard is just that simple. You can now start building your own awesome storyboard!
