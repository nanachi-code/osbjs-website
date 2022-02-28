---
name: Hit objects 
---

# Hit objects

## Slider
### Propeties
- `x`: number
- `y`: number
- `startPoint`: Vector2
- `endPoint`: Vector2
- `startTime`: number
- `endTime`: number
- `duration`: number
- `hitsound`: [Hitsound](/docs/osujs-enums)
- `hitSample`: [IHitSample](/docs/osujs-types)
    - `normalSet`: [SampleSet](/docs/osujs-enums)
    - `additionSet`: [SampleSet](/docs/osujs-enums)
    - `index`: number | undefined
    - `volume`: number | undefined
    - `filename`: string | undefined
- `params`: [ISliderParams](/docs/osujs-types)
    - `curveType`: [CurveType](/docs/osujs-enums) | string
    - `curvePoints`: [Vector2](/docs/math-vector2)[]
    - `slides`: number
    - `length`: number
    - `edgeSounds`: [Hitsound](/docs/osujs-enums)[]
    - `edgeSets`: [IHitSample](/docs/osujs-types)[]
		- `normalSet`: [SampleSet](/docs/osujs-enums)
        - `additionSet`: [SampleSet](/docs/osujs-enums)
        - `index`: number | undefined
        - `volume`: number | undefined
        - `filename`: string | undefined
### Methods
- `positionAtTime(time: number)`: Vector2

**Returns** slider ball position at a specific timestamp.

## Circle
### Properties
- `x`: number
- `y`: number
- `startTime`: number
- `hitsound`: [Hitsound](/docs/osujs-enums)
- `hitSample`: [IHitSample](/docs/osujs-types)
    - `normalSet`: [SampleSet](/docs/osujs-enums)
    - `additionSet`: [SampleSet](/docs/osujs-enums)
    - `index`: number | undefined
    - `volume`: number | undefined
    - `filename`: string | undefined
- `position`: [Vector2](/docs/math-vector2)
  
## Spinner
### Properties
- `x`: number = 256
- `y`: number = 192
- `startTime`: number
- `endTime`: number
- `hitsound`: [Hitsound](/docs/osujs-enums)
- `hitSample`: [IHitSample](/docs/osujs-types)
    - `normalSet`: [SampleSet](/docs/osujs-enums)
    - `additionSet`: [SampleSet](/docs/osujs-enums)
    - `index`: number | undefined
    - `volume`: number | undefined
    - `filename`: string | undefined
