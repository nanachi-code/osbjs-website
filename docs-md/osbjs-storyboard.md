---
name: Storyboard
---

# Storyboard

```typescript
const sb = new Storyboard(filename: string, path: string = './storyboard')
```

Create a new storyboard instance.

- **filename**: osb filename.
- **path**: full path to beatmap folder.

## Instance methods

### `registerComponents`

```typescript
sb.registerComponents(...components: Component[])
```
Register components to this storyboard. You can supply as many components as you want. **Note**: later component will have higher z-index therefore it might appear on top of earlier components if their active time overlap.

- **components**: component instances.

### `generate`
```typescript
sb.generate()
```
Generate storyboard. Call this after every component is registered.
