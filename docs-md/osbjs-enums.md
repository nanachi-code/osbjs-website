---
name: Enums
---

# Enums

## Easing
```typescript
enum Easing {
	Linear,
	Out,
	In,
	InQuad,
	OutQuad,
	InOutQuad,
	InCubic,
	OutCubic,
	InOutCubic,
	InQuart,
	OutQuart,
	InOutQuart,
	InQuint,
	OutQuint,
	InOutQuint,
	InSine,
	OutSine,
	InOutSine,
	InExpo,
	OutExpo,
	InOutExpo,
	InCirc,
	OutCirc,
	InOutCirc,
	InElastic,
	OutElastic,
	OutElasticHalf,
	OutElasticQuarter,
	InOutElastic,
	InBack,
	OutBack,
	InOutBack,
	InBounce,
	OutBounce,
	InOutBounce,
}
```
  
## Layer
```typescript
enum Layer {
	Background = 'Background',
	Foreground = 'Foreground',
	Fail = 'Fail',
	Pass = 'Pass',
	Overlay = 'Overlay',
}
```
  
## Origin
```typescript
enum Origin {
	TopLeft = 'TopLeft',
	TopCenter = 'TopCentre',
	TopCentre = 'TopCentre',
	TopRight = 'TopRight',
	CenterLeft = 'CentreLeft',
	Center = 'Centre',
	CenterRight = 'CentreRight',
	CentreLeft = 'CentreLeft',
	Centre = 'Centre',
	CentreRight = 'CentreRight',
	BottomLeft = 'BottomLeft',
	BottomCenter = 'BottomCentre',
	BottomCentre = 'BottomCentre',
	BottomRight = 'BottomRight',
}
```

## LoopType
```typescript
enum LoopType {
	LoopForever = 'LoopForever',
	LoopOnce = 'LoopOnce',
}
```
  
## Parameter
```typescript
enum Parameter {
	None = '',
	FlipHorizontal = 'H',
	FlipVertical = 'V',
	AdditiveBlending = 'A',
}
```

## SampleLayer
```typescript
enum SampleLayer {
	Background,
	Fail,
	Pass,
	Foreground,
}
```
  
## TriggerName
```typescript
enum TriggerName {
	HitSound = 'HitSound',
	HitSoundClap = 'HitSoundClap',
	HitSoundFinish = 'HitSoundFinish',
	HitSoundWhistle = 'HitSoundWhistle',
	Passing = 'Passing',
	Failing = 'Failing',
}
```
