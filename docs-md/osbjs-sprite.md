---
name: Sprite
---

# Sprite
```typescript
const sprite = new Sprite(
	path: string,
	layer: Layer = Layer.Background,
	origin: Origin = Origin.Center,
	initialPosition: OsbVector2 = new OsbVector2(320, 480)
)
```
Create a new sprite. A sprite is also a component, therefore you can register it to storyboard directly, or add it to another components.

* **path**: path to the image file relative to the beatmap folder. For example, if you have a subfolder named `sb` inside your beatmap folder and your image file named `background.jpg` is in it then you must pass `sb/background.jpg` without the dot at the start.
* **layer**: [Layer](/docs/osbjs-enums)
* **origin**: [Origin](/docs/osbjs-enums)
* **initialPosition**: the initial position of the image.

## Instance methods
### `Fade`
```typescript
sprite.Fade(startTime: number | string, endTime: number | string, startOpacity: number, endOpacity: number, easing: Easing = Easing.Linear)
```
* **startTime**, **endTime**: times in milliseconds indicate when the event will occur
* **startOpacity**, **endOpacity**: opacity at the start/end of the animation
* **easing**: [Easing](/docs/osbjs-enums)

### `FadeAtTime`
```typescript
sprite.FadeAtTime(time: number | string, opacity: number)
```
Shorthand command for [Fade](/docs/osbjs-enums) when `startTime` and `endTime` are equal.
* **time**: time in milliseconds/timestamp indicates when the event will occur.
* **opacity**: opacity at the given time.

### `Move`
```typescript
sprite.Move(startTime: number | string, endTime: number | string, startPosition: OsbVector2, endPosition: OsbVector2, easing: Easing = Easing.Linear)
```
* **startTime**, **endTime**: times in milliseconds indicate when the event will occur.
* **startPosition**, **endPosition**: position at the start/end of the animation.
* **easing**: [Easing](/docs/osbjs-enums)

### `MoveAtTime`
```typescript
sprite.MoveAtTime(time: number | string, position: OsbVector2)
```
Shorthand command for [Move](#spritemove) when `startTime` and `endTime` are equal.
* **time**: time in milliseconds/timestamp indicates when the event will occur.
* **position**: position at the given time.

### `MoveX`
```typescript
sprite.MoveX(startTime: number | string, endTime: number | string, startX: number, endX: number, easing: Easing = Easing.Linear)
```
* **startTime**, **endTime**: times in milliseconds indicate when the event will occur.
* **startX**, **endX**: x position at the start/end of the animation.
* **easing**: [Easing](/docs/osbjs-enums)

### `MoveXAtTime`
```typescript
sprite.MoveXAtTime(time: number | string, x: number)
```
Shorthand command for `MoveX` when `startTime` and `endTime` are equal.
* **time**: time in milliseconds/timestamp indicates when the event will occur.
* **x**: x position at the given time.

### `MoveY`
```typescript
sprite.MoveY(startTime: number | string, endTime: number | string, startY: number, endY: number, easing: Easing = Easing.Linear)
```
* **startTime**, **endTime**: times in milliseconds indicate when the event will occur.
* **startY**, **endY**: y position at the start/end of the animation.
* **easing**: [Easing](/docs/osbjs-enums)

### `MoveYAtTime`
```typescript
sprite.MoveYAtTime(time: number | string, y: number)
```
Shorthand command for `MoveY` when `startTime` and `endTime` are equal.
* **time**: time in milliseconds/timestamp indicates when the event will occur.
* **y**: y position at the given time.

### `Scale`
```typescript
sprite.Scale(startTime: number | string, endTime: number | string, startScale: number, endScale: number, easing: Easing = Easing.Linear)
```
* **startTime**, **endTime**: times in milliseconds indicate when the event will occur.
* **startScale**, **endScale**: scale factor at the start/end of the animation.
* **easing**: [Easing](/docs/osbjs-enums)

### `ScaleAtTime`
```typescript
sprite.ScaleAtTime(time: number | string, scale: number)
```
Shorthand command for `Scale` when `startTime` and `endTime` are equal.
* **time**: time in milliseconds/timestamp indicates when the event will occur.
* **scale**: scale factor at the given time.

### `ScaleVec`
```typescript
sprite.Scale(startTime: number | string, endTime: number | string, startScale: OsbVector2, endScale: OsbVector2, easing: Easing = Easing.Linear)
```
* **startTime**, **endTime**: times in milliseconds indicate when the event will occur.
* **startScale**, **endScale**: scale factor at the start/end of the animation.
* **easing**: [Easing](/docs/osbjs-enums)

### `ScaleVecAtTime`
```typescript
sprite.ScaleAtTime(time: number | string, scale: OsbVector2)
```
Shorthand command for `ScaleVec` when `startTime` and `endTime` are equal.
* **time**: time in milliseconds/timestamp indicates when the event will occur.
* **scale**: scale factor at the given time.

### `Rotate`
```typescript
sprite.Rotate(startTime: number | string, endTime: number | string, startAngle: number, endAngle: number, easing: Easing = Easing.Linear)
```
* **startTime**, **endTime**: times in milliseconds indicate when the event will occur.
* **startAngle**, **endAngle**: angle to rotate by in radians at the start/end of the animation.
* **easing**: [Easing](/docs/osbjs-enums)

### `RotateAtTime`
```typescript
sprite.RotateAtTime(time: number | string, angle: number)
```
Shorthand command for `Rotate` when `startTime` and `endTime` are equal.
* **time**: time in milliseconds/timestamp indicates when the event will occur.
* **angle**: angle to rotate by in radians at the given time.

### `Color`
```typescript
sprite.Color(startTime: number | string, endTime: number | string, startColor: OsbColor, endColor: OsbColor, easing: Easing = Easing.Linear)
```
* **startTime**, **endTime**: times in milliseconds indicate when the event will occur.
* **startColor**, **endColor**: color at the start/end of the animation. Sprites with (255,255,255) will be their original colour and sprites with (0,0,0) will be totally black. Anywhere in between will result in subtractive colouring.
* **easing**: [Easing](/docs/osbjs-enums)

### `ColorAtTime`
```typescript
sprite.ColorAtTime(time: number | string, scale: OsbColor)
```
Shorthand command for `Color` when `startTime` and `endTime` are equal.
* **time**: time in milliseconds/timestamp indicates when the event will occur.
* **color**: color at the given time. Sprites with (255,255,255) will be their original colour and sprites with (0,0,0) will be totally black. Anywhere in between will result in subtractive colouring.

### `Parameter`
```typescript
sprite.Parameter(startTime: number | string, endTime: number | string, parameter: Parameter)
```
* **startTime**, **endTime**: times in milliseconds indicate when the event will occur.
* **parameter**: [Parameter](#parameter)

### `ParameterAtTime`
```typescript
sprite.ParameterAtTime(time: number | string, parameter: Parameter)
```
Shorthand command for `Parameter` when `startTime` and `endTime` are equal.
* **time**: time in milliseconds/timestamp indicates when the event will occur.
* **parameter**: effect [Parameter](#parameter) to apply.

### `Loop`
```typescript
sprite.Loop(group: Loop)
```
Add a loop group to this sprite
* group: a Loop group.

### `Trigger`
```typescript
sprite.Trigger(group: Trigger)
```
Add a trigger group to this sprite
* group: a Trigger group.

## Loop group
```typescript
const loop = new Loop(startTime: number | string, count: number)
```
Loops can be defined to repeat a set of events constantly for a set number of iterations.

Note that events inside a loop should be timed with a **zero-base**. This means that you should start from 0ms for the inner event's timing and work up from there. The loop event's start time will be added to this value at game runtime.

* **startTime**: time of the first loop's start.
* **count**: number of times to repeat the loop.

Loop has all of `Sprite`'s methods except `Loop` and `Trigger`.

Example:
```javascript
// create a loop group
const loop = new Loop(1000, 3)
loop.Fade(0, 1000, 1, 0.5) // this means sprite will start to fade at 1000, 2000 and 3000 respectively.

// add loop group to sprite
sprite.loop(loop)
```

## Trigger group
```typescript
const trigger = new Trigger(triggerName: TriggerName | string, startTime: number | string, endTime: number)
```

Trigger loops can be used to trigger animations based on play-time events. Although called loops, trigger loops only execute once when triggered.

Trigger loops are zero-based similar to normal loops. If two overlap, the first will be halted and replaced by a new loop from the beginning.
If they overlap any existing storyboarded events, they will not trigger until those transformations are no in effect.

* **triggerName**: [TriggerName](/docs/osbjs-enums) for more info, see https://osu.ppy.sh/wiki/en/Storyboard/Scripting/Compound_Commands
* **startTime**: when the trigger is valid.
* **endTime**: when the trigger stops being valid.

Trigger has all of `Sprite`'s methods except for `Loop` and `Trigger`.

Example:
```javascript
// create a trigger group
const trigger = new Trigger(TriggerName.HitSoundClap, 1000, 3000)
trigger.Fade(0, 1000, 1, 0.5) // this means sprite will start to fade if clap hitsound is played during the time 1000 and 3000.

// add trigger group to sprite
sprite.trigger(trigger)
```
