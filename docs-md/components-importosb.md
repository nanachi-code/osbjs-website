---
name: ImportOsb | components
---
# ImportOsb
```typescript
const importOsb = new ImportOsb(osbPath: string)
```

Import existing osb file. Useful if you are doing collab with people using different develop platforms like storybrew, sgl etc.
* **osbPath**: Full path to osb file.

## Example 
```js 
const path = require('path')
const importedOsb = new ImportOsb(path.join(__dirname, 'collab_part.osb'))

sb.registerComponents(importedOsb)
```
