---
name: Matrix4 | math
---
# Matrix4
Represents a 4x4 matrix
```typescript
let mat4 = new Matrix4(
	m11: number = 1, m12: number = 0, m13: number = 0, m14: number = 0,
	m21: number = 0, m22: number = 1, m23: number = 0, m24: number = 0,
	m31: number = 0, m32: number = 0, m33: number = 1, m34: number = 0,
	m41: number = 0, m42: number = 0, m43: number = 0, m44: number = 1,
)
```
This will create an identity 4x4 matrix.

## Instance properties
- `m11`: 1st row, 1st col
- `m12`: 1st row, 2nd col
...
- `m44`: 4th row, 4th col
- `isIdentity`: Returns whether the matrix is the identity matrix.
- `translation`: Get the translation component of this matrix.

## Static properties
- `Identity`: Gets the identity matrix.

## Instance methods
### `determinant`, `det`
```typescript
mat4.determinant(): number
mat4.det() : number
```
Calculates the determinant for this matrix.

### `equals`
```typescript
mat4.equals(m: Matrix4): boolean
```
Returns a value that indicates whether this instance and another 4x4 matrix are equal.

### `clone`
```typescript
mat4.clone(): Matrix4
```
Returns a new Matrix4 and with identical elements to this one.

## Static methods
### `add`
```typescript
Matrix4.add(m1: Matrix4, m2: Matrix4): Matrix4
```
Adds each element in one matrix with its corresponding element in a second matrix.

### `sub`
```typescript
Matrix4.sub(m1: Matrix4, m2: Matrix4): Matrix4
```
Subtracts each element in a second matrix from its corresponding element in a first matrix.

### `multiply`
```typescript
Matrix4.multiply(m1: Matrix4, m2: Matrix4): Matrix4
```
Returns the matrix that results from multiplying two matrices together.

### `multiplyScalar`
```typescript
Matrix4.multiplyScalar(m: Matrix4, v: number): Matrix4
```
Returns the matrix that results from scaling all the elements of a specified matrix by a scalar factor.

### `transpose`
```typescript
Matrix4.transpose(m: Matrix4): Matrix4
```
Transposes the rows and columns of a matrix.

### `invert`
```typescript
Matrix4.invert(m: Matrix4, result: Matrix4): boolean
```
Inverts the specified matrix. The return value indicates whether the operation succeeded.

### `negate`
```typescript
Matrix4.negate(m: Matrix4): Matrix4
```
Negates the specified matrix by multiplying all its values by -1.

### `lerp`
```typescript
Matrix4.lerp(m1: Matrix4, m2: Matrix4, alpha: number): Matrix4
```
Performs a linear interpolation from one matrix to a second matrix based on a value that specifies the weighting of the second matrix.

### `createTranslation`
```typescript
Matrix4.createTranslation(v: Vector3): Matrix4
```
Creates a translation matrix from the specified 3-dimensional vector.

### `createRotationX`
```typescript
Matrix4.createRotationX(angle: number, center?: Vector3): Matrix4
```
Creates a rotation matrix using the given rotation in radians and a center point (if specified).

### `createRotationY`
```typescript
Matrix4.createRotationY(angle: number, center?: Vector3): Matrix4
```
Creates a rotation matrix using the given rotation in radians and a center point (if specified).

### `createRotationZ`
```typescript
Matrix4.createRotationZ(angle: number, center?: Vector3): Matrix4
```
Creates a rotation matrix using the given rotation in radians and a center point (if specified).

### `createScaleVec`
```typescript
Matrix4.createScaleVec(v: Vector3, center?: Vector3): Matrix4
```
Creates a scaling matrix from the specified vector scale and a center point (if specified).

### `createScaleScalar`
```typescript
Matrix4.createScaleScalar(s: number, center?: Vector3): Matrix4
```
Creates a scaling matrix that scales uniformly with the given scale and a center point (if specified).

### `createFromAxisAngle`
```typescript
Matrix4.createFromAxisAngle(axis: Vector3, angle: number): Matrix4
```
Creates a matrix that rotates around an arbitrary vector.

### `createFromQuaternion`
```typescript
Matrix4.createFromQuaternion(q: Quaternion): Matrix4
```
Creates a rotation matrix from the given Quaternion rotation value.

### `createFromYawPitchRoll`
```typescript
Matrix4.createFromYawPitchRoll(yaw: number, pitch: number, roll: number): Matrix4
```
Creates a rotation matrix from the specified yaw, pitch, and roll.
- **yaw**: Angle of rotation, in radians, around the Y-axis.
- **pitch**: Angle of rotation, in radians, around the X-axis.
- **roll**: Angle of rotation, in radians, around the Z-axis.

### `createLookAt`
```typescript
Matrix4.createLookAt(
	cameraPosition: Vector3,
	cameraTarget: Vector3,
	cameraUpVector: Vector3
): Matrix4
```
Creates a view matrix.
- **cameraPosition**: The position of the camera.
- **cameraTarget**: The target towards which the camera is pointing.
- **cameraUpVector**: The direction that is "up" from the camera's point of view.

### `createOrthographic`
```typescript
Matrix4.createOrthographic(
	width: number,
	height: number,
	zNearPlane: number,
	zFarPlane: number
): Matrix4
```
Creates an orthographic perspective matrix from the given view volume dimensions.
- **width**: Width of the view volume at the near view plane.
- **height**: Height of the view volume at the near view plane.
- **zNearPlane**: Minimum Z-value of the view volume.
- **zFarPlane**: Maximum Z-value of the view volume.

### `createOrthographicOffCenter`
```typescript
Matrix4.createOrthographicOffCenter(
	left: number, 
	right: number, 
	bottom: number, 
	top: number, 
	zNearPlane: number, 
	zFarPlane: number
): Matrix4
```
Builds a customized, orthographic projection matrix.
- **left**: Minimum X-value of the view volume.
- **right**: Maximum X-value of the view volume.
- **bottom**: Minimum Y-value of the view volume.
- **top**: Maximum Y-value of the view volume.
- **zNearPlane**: Minimum Z-value of the view volume.
- **zFarPlane**: Maximum Z-value of the view volume.

### `createPerspective`
```typescript
Matrix4.createPerspective(
	width: number, 
	height: number, 
	nearPlaneDistance: number, 
	farPlaneDistance: number
): Matrix4
```
Creates a perspective projection matrix from the given view volume dimensions.
- **width**: Width of the view volume at the near view plane.
- **height**: Height of the view volume at the near view plane.
- **nearPlaneDistance**: Distance to the near view plane.
- **farPlaneDistance**: Distance to of the far view plane.

### `createPerspectiveFieldOfView`
```typescript
Matrix4.createPerspectiveFieldOfView(
	fieldOfView: number, 
	aspectRatio: number, 
	nearPlaneDistance: number, 
	farPlaneDistance: number
): Matrix4
```
Creates a perspective projection matrix based on a field of view, aspect ratio, and near and far view plane distances.
- **fieldOfView**: Field of view in the y direction, in radians.
- **aspectRatio**: Aspect ratio, defined as view space width divided by height.
- **nearPlaneDistance**: Distance to the near view plane.
- **farPlaneDistance**: Distance to of the far view plane.

### `createPerspectiveOffCenter`
```typescript
Matrix4.createPerspectiveOffCenter(
	left: number,
	right: number,
	bottom: number,
	top: number,
	nearPlaneDistance: number,
	farPlaneDistance: number
): Matrix4
```
Creates a customized, perspective projection matrix.
- **left**: Minimum x-value of the view volume at the near view plane.
- **right**: Maximum x-value of the view volume at the near view plane.
- **bottom**: Minimum y-value of the view volume at the near view plane.
- **top**: Maximum y-value of the view volume at the near view plane
- **nearPlaneDistance**: Distance to the near view plane.
- **farPlaneDistance**: Distance to of the far view plane.

### `createWorld`
```typescript
Matrix4.createWorld(position: Vector3, forward: Vector3, up: Vector3): Matrix4
```
Creates a world matrix with the specified parameters
- **position**: The position of the object; used in translation operations.
- **forward**: Forward direction of the object.
- **up**: Upward direction of the object; usually [0, 1, 0].
