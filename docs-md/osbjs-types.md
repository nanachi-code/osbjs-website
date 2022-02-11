---
name: Types
---

# Types

## ISubtitle
```typescript
interface ISubtitle { 
	startTime: number
	endTime: number
	text: string
}
```

## IStoryboardLayers
```typescript
interface IStoryboardLayers{
	background: (Sprite | Animation)[]
	foreground: (Sprite | Animation)[]
	fail: (Sprite | Animation)[]
	pass: (Sprite | Animation)[]
	sample: Sample[]
}
```

## IVector2
```typescript
interface IFontProperties {
	fontSize: number
	fontName: string
}
```
