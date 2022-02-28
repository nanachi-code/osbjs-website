---
name: TextureGenerator
---

# TextureGenerator
```typescript
const txtGen = new TextureGenerator(folderPath: string, osbFolderPath: string, fontProps?: IFontProperties)
```
Used to generate texture.

* **folderPath**: full path to the folder that will be used to save generated text images.
* **osbFolderPath**: relative path to the folder that will be used to save generated text images. For example: `sb/lyrics`
* **fontProps**:
```typescript
interface IFontProperties {
	fontSize: number // default: 72px
	fontName: string // default: Arial
}
```

## Instance methods
### `generateTexture`
```typescript
txtGen.generateTexture(text: string, color?: IColor, offset?: IOffsetOptions) : Texture
```
Generate and save text image. Offset will be 0 on each side if not set. Returns [Texture](#texture).
* **text**: Text.
* **color**: 
```typescript
interface IColor { r: number, g: number, b: number }
```
* **offset**:
```typescript
interface IOffsetOptions {
	left: number
	right: number
	top: number
	bottom: number
}
```

### `getTexture`
```typescript
txtGen.getTexture(text: string) : Texture | undefined
```
Get generated [Texture](#texture) from cache, and return undefined if not exists. Use [`generateTexture`](#texturegeneratorgeneratetexture) instead.
* **text**: Text.

### `emptyDir`
```typescript
txtGen.emptyDir()
```
Clear folder that is used to save generated text image.

### `registerFont`
```typescript
txtGen.registerFont(fontPath: string, family: string, weight?: string, style?: string)
```
Register a new font. Must be called before [`generateTexture`](#texturegeneratorgeneratetexture) if you are using a font file that is not installed as a system font. `family`, `weight`, `style` must follow css `@font-face` rules.

* **fontPath**: full path to font file.
* **family**: font family.
* **weight**: font weight.
* **style**: font style.
