---
name: DiffSpecificStoryboard
---

# DiffSpecificStoryboard

```typescript
const sb = new DiffSpecificStoryboard(filename: string, path: string)
```

Create a new storyboard instance for a specific difficulty. This is helpful if you need to generate storyboard for something that's not consistent throughout the mapset, like mapper name, or hit object highlight etc.

- **filename**: osu filename.
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
