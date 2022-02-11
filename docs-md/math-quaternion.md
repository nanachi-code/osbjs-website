---
name: Quaternion | math
---
# Quaternion
Represents a vector that is used to encode three-dimensional physical rotations.
```typescript
let quat = new Quaternion(x: number = 0, y: number = 0, z: number = 0, w: number = 1)
```
The Quaternion structure is used to efficiently rotate an object about the (x,y,z) vector by the angle theta,<br/> where: `w = cos(theta/2) `

## Instance properties
- `x`: The x value of the vector component of the quaternion.
- `y`: The y value of the vector component of the quaternion.
- `z`: The z value of the vector component of the quaternion.
- `w`: The rotation component of the quaternion.
- `isIdentity`: Indicates whether the current instance is the identity quaternion.

## Static properties
- `Identity`: Gets a quaternion that represents no rotation.

## Instance methods
### `clone`
```typescript
quat.clone(): Quaternion
```
Returns a new Quaternion with identical x, y, z and w properties to this one.

### `equals`
```typescript
quat.equals(q: Quaternion): boolean
```
Compares the x, y, z and w properties of v to the equivalent properties of this quaternion to determine if they represent the same rotation.

### `length`
```typescript
quat.length(): number
```
Computes the Euclidean length (straight-line length) of this quaternion, considered as a 4 dimensional vector.

### `lengthSqr`
```typescript
quat.lengthSqr(): number
```
Computes the squared Euclidean length (straight-line length) of this quaternion, considered as a 4 dimensional vector.

### `distance`
```typescript
quat.angleTo(q: Quaternion): number
```
Returns the angle between this quaternion and quaternion q in radians.

## Static methods
### `add`
```typescript
Quaternion.add(q1: Quaternion, q2: Quaternion): Quaternion
```
Adds each element in one quaternion with its corresponding element in a second quaternion.

### `sub`
```typescript
Quaternion.sub(q1: Quaternion, q2: Quaternion): Quaternion
```
Subtracts each element in a second quaternion from its corresponding element in a first quaternion.

### `conjugate`
```typescript
Quaternion.conjugate(q: Quaternion): Quaternion
```
Returns the conjugate of a specified quaternion.

### `multiply`
```typescript
Quaternion.multiply(q1: Quaternion, q2: Quaternion): Quaternion
```
Returns the quaternion that results from multiplying two quaternions together.

### `multiplyScalar`
```typescript
Quaternion.multiplyScalar(q: Quaternion, s: number): Quaternion
```
Returns the quaternion that results from scaling all the components of a specified quaternion by a scalar factor.

### `divide`
```typescript
Quaternion.divide(q1: Quaternion, q2: Quaternion): Quaternion
```
Divides one quaternion by a second quaternion.

### `invert`
```typescript
Quaternion.invert(q: Quaternion): Quaternion
```
Returns the inverse of a quaternion.

### `normalize`
```typescript
Quaternion.normalize(q: Quaternion): Quaternion
```
Divides each component of a specified Quaternion by its length.

### `slerp`
```typescript
Quaternion.slerp(q1: Quaternion, q2: Quaternion, t: number): Quaternion
```
Interpolates between two quaternions, using spherical linear interpolation.

### `createFromAxisAngle`
```typescript
Quaternion.createFromAxisAngle(axis: Vector3, angle: number): Quaternion
```
Creates a quaternion from a unit vector and an angle to rotate around the vector.

### `createFromRotationMatrix`
```typescript
Quaternion.createFromRotationMatrix(m: Matrix4): Quaternion
```
Creates a quaternion from the specified rotation matrix.

### `createFromYawPitchRoll`
```typescript
Quaternion.createFromYawPitchRoll(yaw: number, pitch: number, roll: number): Quaternion
```
Creates a new quaternion from the given yaw, pitch, and roll.
- **yaw**: Angle of rotation, in radians, around the Y-axis.
- **pitch**: Angle of rotation, in radians, around the X-axis.
- **roll**: Angle of rotation, in radians, around the Z-axis.

### `concat`
```typescript
Quaternion.concat(q1: Quaternion, q2: Quaternion): Quaternion
```
Concatenates two quaternions.

### `negate`
```typescript
Quaternion.negate(q: Quaternion): Quaternion
```
Reverses the sign of each component of the quaternion.
