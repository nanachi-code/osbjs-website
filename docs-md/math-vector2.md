---
name: Vector2 | math
---

# Vector2
Represents a vector with two single-precision floating-point values.
```typescript
let vec2 = new Vector2(x: number = 0, y: number = 0)
```

## Instance properties
- `x`: The x component of the vector.
- `y`: The y component of the vector.

## Static properties
- `One`: Gets the vector (1,1).
- `UnitX`: Gets the vector (1,0).
- `UnitY`: Gets the vector (0,1).
- `Zero`: Gets the vector (0,0).

## Instance methods
### `clone`
```typescript
vec2.clone(): Vector2
```
Returns a new Vector2 with the same x, y values as this one.

### `equals`
```typescript
vec2.equals(v: Vector2): boolean
```
Returns true if the components of this vector and v are strictly equal; false otherwise.

### `length`
```typescript
vec2.length(): number
```
Returns the length of the vector.

### `lengthSqr`
```typescript
vec2.lengthSqr(): number
```
Returns the length of the vector squared.

### `distance`
```typescript
vec2.distanceTo(v: Vector2): number
```
Computes the Euclidean distance between the two given points.

### `distanceSqr`
```typescript
vec2.distanceToSqr(v: Vector2): number
```
Computes the Euclidean distance squared between the two given points.

### `angle`
```typescript
vec2.angle(): number
```
Return the angle in radians of this vector with respect to the positive x-axis.

## Static methods
### `add`
```typescript
Vector2.add(v1: Vector2, v2: Vector2): Vector2
```
Adds two vectors together.

### `sub`
```typescript
Vector2.sub(v1: Vector2, v2: Vector2): Vector2
```
Subtracts the second vector from the first.

### `multiply`
```typescript
Vector2.multiply(v1: Vector2, v2: Vector2): Vector2
```
Returns a new vector whose values are the product of each pair of elements in two specified vectors.

### `divide`
```typescript
Vector2.divide(v1: Vector2, v2: Vector2): Vector2
```
Divides the first vector by the second.

### `addScalar`
```typescript
Vector2.addScalar(v: Vector2, s: number): Vector2
```
Adds the scalar value s to this vector's x, y values.

### `subScalar`
```typescript
Vector2.subScalar(v: Vector2, s: number): Vector2
```
Subtracts the scalar value s to this vector's x, y values.

### `multiplyScalar`
```typescript
Vector2.multiplyScalar(v: Vector2, s: number): Vector2
```
Multiplies a vector by a specified scalar.

### `divideScalar`
```typescript
Vector2.divideScalar(v: Vector2, s: number): Vector2
```
Divides the specified vector by a specified scalar value.

### `dot`
```typescript
Vector2.dot(v1: Vector2, v2: Vector2): Vector2
```
Returns the dot product of two vectors.

### `cross`
```typescript
Vector2.cross(v1: Vector2, v2: Vector2): Vector2
```
Returns the cross product of two vectors.

### `normalize`
```typescript
Vector2.normalize(v: Vector2): Vector2
```
Returns a vector with the same direction as the specified vector, but with a length of one.

### `max`
```typescript
Vector2.max(v1: Vector2, v2: Vector2): Vector2
```
Returns a vector whose elements are the maximum of each of the pairs of elements in two specified vectors.

### `min`
```typescript
Vector2.min(v1: Vector2, v2: Vector2): Vector2
```
Returns a vector whose elements are the minimum of each of the pairs of elements in two specified vectors.

### `lerp`
```typescript
Vector2.lerp(v1: Vector2, v2: Vector2, alpha: number): Vector2
```
Linearly interpolate between this vector and v, where alpha is the percent distance along the line - alpha = 0 will be this vector, and alpha = 1 will be v.

### `clamp`
```typescript
Vector2.clamp(v: Vector2, min: Vector2, max: Vector2): Vector2
```
Restricts a vector between a minimum and a maximum value.

### `negate`
```typescript
Vector2.negate(v: Vector2): Vector2
```
Negates a specified vector.

### `abs`
```typescript
Vector2.abs(v: Vector2): Vector2
```
Returns a vector whose elements are the absolute values of each of the specified vector's elements.

### `applyMat3`
```typescript
Vector2.applyMat3(v: Vector2, m: Matrix3): Vector2
```
Transforms a vector by a specified 3x3 matrix.

### `applyMat4`
```typescript
Vector2.applyMat4(v: Vector2, m: Matrix4): Vector2
```
Transforms a vector by a specified 4x4 matrix.

### `applyQuat`
```typescript
Vector2.applyQuat(v: Vector2, q: Quaternion): Vector2
```
Transforms a vector by the specified Quaternion rotation value.
