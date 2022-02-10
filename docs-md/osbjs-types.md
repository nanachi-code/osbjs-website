---
name: Types
---

# Types

## ISubtitle
```ts
interface ISubtitle { 
	startTime: number
	endTime: number
	text: string
}
```

## IStoryboardLayers
```ts
interface IStoryboardLayers{
	background: (Sprite | Animation)[]
	foreground: (Sprite | Animation)[]
	fail: (Sprite | Animation)[]
	pass: (Sprite | Animation)[]
	sample: Sample[]
}
```

## IVector2
```ts
interface IFontProperties {
	fontSize: number
	fontName: string
}
```
