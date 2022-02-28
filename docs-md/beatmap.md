---
name: Beatmap
---

# Beatmap

```typescript
const beatmap = new Beatmap(pathToBeatmap: string)
```

## Properties
### `audioFilename`: string

### `difficulty`: [IBeatmapDifficulty](/docs/osujs-types)
- `hp`: number
- `circleSize`: number
- `overallDifficulty`: number
- `approachRate`: number
- `sliderMultiplier`: number
- `sliderTickRate`: number

### `metadata`: [IBeatmapMetadata](/docs/osujs-types)
- `title`: string
- `artist`: string
- `creator`: string
- `difficulty`: string

### `colors`: [IColor](/docs/osujs-types)[]
- `r`: number
- `g`: number
- `b`: number

### `hitObjects`: [IBeatmapHitObjects](/docs/osujs-types)
- `spinners`: [Spinner](/docs/osujs-hitobjects)[]
- `circles`: [Circle](/docs/osujs-hitobjects)[]
- `sliders`: [Slider](/docs/osujs-hitobjects)[]
  
### `timingPoints`: [ITimingPoint](/docs/osujs-types)[]
- `time`: number
- `beatLength`: number
- `meter`: number
- `sampleSet`: [SampleSet](/docs/osujs-enums)
- `sampleIndex`: number
- `volume`: number
- `uninherited`: boolean
- `kiai`: boolean
