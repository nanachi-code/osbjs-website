---
name: Create your first storyboard
---

# Create your first storyboard

Open `index.js` and add this base code:
```javascript
const { Storyboard } = require('@osbjs/osbjs')

const sb = new Storyboard('osb_filename.osb', 'path/to/beatmap/folder')

sb.generate()
```

osb filename will usually be `Artist - Song (Creator).osb`.

Now we will create a new sprite. A sprite is a static image that we can attach some commands to it like move, fade, scale etc.
In this example we will reuse the beatmap background image and make it fade out.

```javascript
const { Storyboard, Sprite, Layer } = require('@osbjs/osbjs')

const sb = new Storyboard('osb_filename.osb', 'path/to/beatmap/folder')

// Create a new sprite on the background layer
const bg = new Sprite('bg_filename.jpg', Layer.Background)

// Make it fade out after 3 seconds
bg.Fade('00:00:000', '00:03:000', 1, 0)

// Make sure to register it to the storyboard
sb.registerComponents(bg)

sb.generate()
```

(Assuming you have added build script to package.json) Run `npm run build`. You will now see a new .osb file appears in the beatmap folder.
Open osu and you will see the background faded out after first 3 seconds.

Congratulations, you just created your first storyboard!

## Next step
Next, you will learn about [components](/docs/introducing-components).
