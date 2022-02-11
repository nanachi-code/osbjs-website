---
name: Types | osujs
---

# Types
### IColor
- `r`: number
- `g`: number
- `b`: number

## IBeatmapDifficulty
```typescript
interface IBeatmapDifficulty {
	hp: number
	circleSize: number
	overallDifficulty: number
	approachRate: number
	sliderMultiplier: number
	sliderTickRate: number
}
```

## IBeatmapHitObjects
```typescript
interface IBeatmapHitObjects {
	spinners: Spinner[]
	sliders: Slider[]
	circles: Circle[]
}
```

## IBeatmapMetadata
```typescript
interface IBeatmapMetadata {
	title: string
	artist: string
	creator: string
	difficulty: string
}
```

## IHitSample
```typescript
interface IHitSample {
	normalSet: SampleSet
	additionSet: SampleSet
	index: number | undefined
	volume: number | undefined
	filename: string | undefined
}
```

## ISliderParams
```typescript
interface ISliderParams {
	curveType: CurveType | string
	curvePoints: Vector2[]
	slides: number
	length: number
	edgeSounds: Hitsound[]
	edgeSets: IHitSample[]
}
```

## ITimingPoint
```typescript
interface ITimingPoint {
	time: number
	beatLength: number
	meter: number
	sampleSet: SampleSet
	sampleIndex: number
	volume: number
	uninherited: boolean
	kiai: boolean
}
```
