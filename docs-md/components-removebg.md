---
name: RemoveBackground | components
---

# RemoveBackground
```typescript
const noBg = new RemoveBackground(path: string)
```

Hide beatmap background.

* **path**: relative path to beatmap background

## Example
```javascript
const { RemoveBackground } = require("@osbjs/components")
const noBg = new RemoveBackground("bg.jpg")

scene.registerComponents(noBg)
```
