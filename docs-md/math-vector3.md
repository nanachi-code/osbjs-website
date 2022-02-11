---
name: Vector3 | math
---

# Vector3
Represents a vector with three single-precision floating-point values.
```typescript
let vec3 = new Vector3(x: number = 0, y: number = 0, z: number = 0)
```

## Instance properties
- `x`: The x component of the vector.
- `y`: The y component of the vector.
- `z`: The z component of the vector.

## Static properties
- `One`: Gets the vector (1,1,1).
- `UnitX`: Gets the vector (1,0,0).
- `UnitY`: Gets the vector (0,1,0).
- `UnitZ`: Gets the vector (0,0,1).
- `Zero`: Gets the vector (0,0,0).

## Instance methods
### `clone`
```typescript
vec3.clone(): Vector3
```
Returns a new Vector2 with the same x, y and z values as this one.

### `equals`
```typescript
vec3.equals(v: Vector3): boolean
```
Returns true if the components of this vector and v are strictly equal; false otherwise.

### `length`
```typescript
vec3.length(): number
```
Returns the length of the vector.

### `lengthSqr`
```typescript
vec3.lengthSqr(): number
```
Returns the length of the vector squared.

### `distance`
```typescript
vec3.distanceTo(v: Vector3): number
```
Computes the Euclidean distance between the two given points.

### `distanceSqr`
```typescript
vec3.distanceToSqr(v: Vector3): number
```
Computes the Euclidean distance squared between the two given points.

### `angle`
```typescript
vec3.angleTo(v: Vector3): number
```
Returns the angle between this vector and vector v in radians.

## Static methods
### `add`
```typescript
Vector3.add(v1: Vector3, v2: Vector3): Vector3
```
Adds two vectors together.

### `sub`
```typescript
Vector3.sub(v1: Vector3, v2: Vector3): Vector3
```
Subtracts the second vector from the first.

### `multiply`
```typescript
Vector3.multiply(v1: Vector3, v2: Vector3): Vector3
```
Returns a new vector whose values are the product of each pair of elements in two specified vectors.

### `divide`
```typescript
Vector3.divide(v1: Vector3, v2: Vector3): Vector3
```
Divides the first vector by the second.

### `addScalar`
```typescript
Vector3.addScalar(v: Vector3, s: number): Vector3
```
Adds the scalar value s to this vector's x, y and z values.

### `subScalar`
```typescript
Vector3.subScalar(v: Vector3, s: number): Vector3
```
Subtracts the scalar value s to this vector's x, y and z values.

### `multiplyScalar`
```typescript
Vector3.multiplyScalar(v: Vector3, s: number): Vector3
```
Multiplies a vector by a specified scalar.

### `divideScalar`
```typescript
Vector3.divideScalar(v: Vector3, s: number): Vector3
```
Divides the specified vector by a specified scalar value.

### `dot`
```typescript
Vector3.dot(v1: Vector3, v2: Vector3): Vector3
```
Returns the dot product of two vectors.

### `cross`
```typescript
Vector3.cross(v1: Vector3, v2: Vector3): Vector3
```
Returns the cross product of two vectors.

### `normalize`
```typescript
Vector3.normalize(v: Vector3): Vector3
```
Returns a vector with the same direction as the specified vector, but with a length of one.

### `max`
```typescript
Vector3.max(v1: Vector3, v2: Vector3): Vector3
```
Returns a vector whose elements are the maximum of each of the pairs of elements in two specified vectors.

### `min`
```typescript
Vector3.min(v1: Vector3, v2: Vector3): Vector3
```
Returns a vector whose elements are the minimum of each of the pairs of elements in two specified vectors.

### `applyQuat`
```typescript
Vector3.applyQuat(v: Vector3, q: Quaternion)
```
Applies a Quaternion transform to this vector.

### `lerp`
```typescript
Vector3.lerp(v1: Vector3, v2: Vector3, alpha: number): Vector3
```
Linearly interpolate between this vector and v, where alpha is the percent distance along the line - alpha = 0 will be this vector, and alpha = 1 will be v.

### `clamp`
```typescript
Vector3.clamp(v: Vector3, min: Vector3, max: Vector3): Vector3
```
Restricts a vector between a minimum and a maximum value.

### `negate`
```typescript
Vector3.negate(v: Vector3): Vector3
```
Negates a specified vector.

### `abs`
```typescript
Vector3.abs(v: Vector3): Vector3
```
Returns a vector whose elements are the absolute values of each of the specified vector's elements.

### `reflect`
```typescript
Vector3.reflect(v: Vector3, normal: Vector3): Vector3
```
Returns the reflection of a vector off a surface that has the specified normal.

### `applyMat3`
```typescript
Vector3.applyMat3(v: Vector3, m: Matrix3): Vector3
```
Transforms a vector by a specified 3x3 matrix.

### `applyMat4`
```typescript
Vector3.applyMat4(v: Vector3, m: Matrix4): Vector3
```
Transforms a vector by a specified 4x4 matrix.
