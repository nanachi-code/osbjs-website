---
name: Utils
---

# Utils

## SubtitleCollection
```typescript
new SubtitleCollection(path: string)
```
Convert lyrics file into a time-text collection

* **path**: full path to lyrics file. File types supported: `srt`, `vtt`

Property:
* **subtitles**: [`ISubtitle`](/docs/osbjs-types)[]

## `rgbToHex`
```typescript
function rgbToHex(r: number, g: number, b: number): string
```
Converts rgb color to its corresponding hex string.

## `parseOsuTimestamp`
```typescript
function parseOsuTimestamp(timestamp: string): number
```
Converts osu timestamp to miliseconds. osbjs calls this function under the hood.

## OsbColor
```typescript
new OsbColor(r: number, g: number, b: number)
```

* **r**: red
* **g**: green
* **b**: blue

Only use with sprite/animation.

## OsbVector2
```typescript
new OsbVector2(x: number, y: number)
```

* **x**: x value of this vector
* **y**: y value of this vector

Only use with sprite/animation.
