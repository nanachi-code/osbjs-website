---
name: Utils
---

# Utils

## SubtitleCollection
```ts
new SubtitleCollection(path: string)
```
Convert lyrics file into a time-text collection

* **path**: full path to lyrics file. File types supported: `srt`, `vtt`

Property:
* **subtitles**: [`ISubtitle`](/docs/osbjs-types)[]

## `rgbToHex`
```ts
function rgbToHex(r: number, g: number, b: number): string
```
Converts rgb color to its corresponding hex string.

## `parseOsuTimestamp`
```ts
function parseOsuTimestamp(timestamp: string): number
```
Converts osu timestamp to miliseconds. osbjs calls this function under the hood.

## OsbColor
```ts
new OsbColor(r: number, g: number, b: number)
```

* **r**: red
* **g**: green
* **b**: blue

Only use with sprite/animation.

## OsbVector2
```ts
new OsbVector2(x: number, y: number)
```

* **x**: x value of this vector
* **y**: y value of this vector

Only use with sprite/animation.
