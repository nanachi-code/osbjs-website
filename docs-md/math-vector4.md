---
name: Vector4 | math
---

# Vector4
Represents a vector with four single-precision floating-point values.
```typescript
let vec4 = new Vector4(x: number = 0, y: number = 0, z: number = 0, w: number = 1)
```

## Instance properties
- `x`: The x component of the vector.
- `y`: The y component of the vector.
- `z`: The z component of the vector.
- `w`: The w component of the vector.

## Static properties
- `One`: Gets the vector (1,1,1,1).
- `UnitX`: Gets the vector (1,0,0,0).
- `UnitY`: Gets the vector (0,1,0,0).
- `UnitZ`: Gets the vector (0,0,1,0).
- `UnitW`: Gets the vector (0,0,0,1).
- `Zero`: Gets the vector (0,0,0,0).

## Instance methods
### `clone`
```typescript
vec4.clone(): Vector4
```
Returns a new Vector2 with the same x, y, z and w values as this one.

### `equals`
```typescript
vec4.equals(v: Vector4): boolean
```
Returns true if the components of this vector and v are strictly equal; false otherwise.

### `length`
```typescript
vec4.length(): number
```
Returns the length of the vector.

### `lengthSqr`
```typescript
vec4.lengthSqr(): number
```
Returns the length of the vector squared.

### `distance`
```typescript
vec4.distanceTo(v: Vector4): number
```
Computes the Euclidean distance between the two given points.

### `distanceSqr`
```typescript
vec4.distanceToSqr(v: Vector4): number
```
Computes the Euclidean distance squared between the two given points.

## Static methods
### `add`
```typescript
Vector4.add(v1: Vector4, v2: Vector4): Vector4
```
Adds two vectors together.

### `sub`
```typescript
Vector4.sub(v1: Vector4, v2: Vector4): Vector4
```
Subtracts the second vector from the first.

### `multiply`
```typescript
Vector4.multiply(v1: Vector4, v2: Vector4): Vector4
```
Returns a new vector whose values are the product of each pair of elements in two specified vectors.

### `divide`
```typescript
Vector4.divide(v1: Vector4, v2: Vector4): Vector4
```
Divides the first vector by the second.

### `addScalar`
```typescript
Vector4.addScalar(v: Vector4, s: number): Vector4
```
Adds the scalar value s to this vector's x, y, z and w values.

### `subScalar`
```typescript
Vector4.subScalar(v: Vector4, s: number): Vector4
```
Subtracts the scalar value s to this vector's x, y, z and w values.

### `multiplyScalar`
```typescript
Vector4.multiplyScalar(v: Vector4, s: number): Vector4
```
Multiplies a vector by a specified scalar.

### `divideScalar`
```typescript
Vector4.divideScalar(v: Vector4, s: number): Vector4
```
Divides the specified vector by a specified scalar value.

### `dot`
```typescript
Vector4.dot(v1: Vector4, v2: Vector4): Vector4
```
Returns the dot product of two vectors.

### `cross`
```typescript
Vector4.cross(v1: Vector4, v2: Vector4): Vector4
```
Returns the cross product of two vectors.

### `normalize`
```typescript
Vector4.normalize(v: Vector4): Vector4
```
Returns a vector with the same direction as the specified vector, but with a length of one.

### `max`
```typescript
Vector4.max(v1: Vector4, v2: Vector4): Vector4
```
Returns a vector whose elements are the maximum of each of the pairs of elements in two specified vectors.

### `min`
```typescript
Vector4.min(v1: Vector4, v2: Vector4): Vector4
```
Returns a vector whose elements are the minimum of each of the pairs of elements in two specified vectors.

### `applyQuat`
```typescript
Vector4.applyQuat(v: Vector4, q: Quaternion)
```
Applies a Quaternion transform to this vector.

### `applyMat3`
```typescript
Vector4.applyMat3(v: Vector4, m: Matrix3): Vector4
```
Transforms a vector by a specified 3x3 matrix.

### `lerp`
```typescript
Vector4.lerp(v1: Vector4, v2: Vector4, alpha: number): Vector4
```
Linearly interpolate between this vector and v, where alpha is the percent distance along the line - alpha = 0 will be this vector, and alpha = 1 will be v.

### `clamp`
```typescript
Vector4.clamp(v: Vector4, min: Vector4, max: Vector4): Vector4
```
Restricts a vector between a minimum and a maximum value.

### `negate`
```typescript
Vector4.negate(v: Vector4): Vector4
```
Negates a specified vector.

### `abs`
```typescript
Vector4.abs(v: Vector4): Vector4
```
Returns a vector whose elements are the absolute values of each of the 
specified vector's elements.
