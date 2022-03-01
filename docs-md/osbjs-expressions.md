---
name: Expressions
---

# Expressions

An expression is a reusable function that takes a `Sprite`/`Animation`/`Loop` group/`Trigger` group(or `Commandable` in short) and performs a predefined task, which will make your code much more cleaner. The good thing is, you can define your own expressions (and it's recommended to do so) and reuse across components.
Example:
```js
function rotateWhileMovingUp(sprite, startTime, endTime, originY, offset, angle) {
	sprite.MoveY(startTime, endTime, originY, originY + offset)
	sprite.Rotate(startTime, endTime, 0, angle)
}

const sprite = new Sprite("sb/bg.jpg")
// call it
rotateWhileMovingUp(sprite, 0, 1000, 240, 50, Math.PI / 2)
```

osbjs offers a few built-in expressions for convenient.

## wiggleXY
```typescript
function wiggleXY(
	commandable: Commandable,
	frequency: number, 
	amplitude: number, 
	startTime: number, 
	endTime: number, 
	origin?: OsbVector2 | Vector2 = new OsbVector2(320, 240)
)
```
Randomly shakes (wiggles) the position around an origin.
* **commandable**: `Sprite`/`Animation`/`Loop` group/`Trigger` group
* **frequency**: amount of wiggles per second
* **amplitude**: the maximum distance from the origin
* **startTime**: start time of the expression
* **endTime**: end time of the expression
* **origin**: origin

## wiggleX
```typescript
function wiggleX(
	commandable: Commandable, 
	frequency: number, 
	amplitude: number, 
	startTime: number, 
	endTime: number, 
	originX?: number = 320
)
```
Randomly shakes (wiggles) the position on the x axis around an origin.
* **commandable**: `Sprite`/`Animation`/`Loop` group/`Trigger` group
* **frequency**: amount of wiggles per second
* **amplitude**: the maximum distance from the origin
* **startTime**: start time of the expression
* **endTime**: end time of the expression
* **originX**: x coordinate of the origin

## wiggleY
```typescript
function wiggleY(
	commandable: Commandable, 
	frequency: number, 
	amplitude: number, 
	startTime: number, 
	endTime: number, 
	originY?: number = 240
)
```
Randomly shakes (wiggles) the position on the y axis around an origin.
* **commandable**: `Sprite`/`Animation`/`Loop` group/`Trigger` group
* **frequency**: amount of wiggles per second
* **amplitude**: the maximum distance from the origin
* **startTime**: start time of the expression
* **endTime**: end time of the expression
* **originY**: y coordinate of the origin

## wiggleRotation
```typescript
function wiggleRotation(
	commandable: Commandable,
	frequency: number,
	amplitude: number,
	startTime: number,
	endTime: number,
	originAngle?: number = 0
)
```
Randomly rotates around an "origin" angle.
* **commandable**: `Sprite`/`Animation`/`Loop` group/`Trigger` group
* **frequency**: amount of wiggles per second
* **amplitude**: the maximum angle from the origin
* **startTime**: start time of the expression
* **endTime**: end time of the expression
* **originAngle**: the "origin" angle

## wiggleY
```typescript
function wiggleColor(
	commandable: Commandable,
	frequency: number,
	amplitude: number,
	startTime: number,
	endTime: number,
	color1: OsbColor,
	color2: OsbColor
) 
```
Randomly "wiggle" between 2 colors.
* **commandable**: `Sprite`/`Animation`/`Loop` group/`Trigger` group
* **frequency**: amount of wiggles per second
* **amplitude**: the maximum value the sprite's r, g, b values can be starting from the "origin".
* **startTime**: start time of the expression
* **endTime**: end time of the expression
* **color1**, **color2**: "Maximum" and "minimum" colors value. The sprite's r, g, b values cannot go further than these 2's.

