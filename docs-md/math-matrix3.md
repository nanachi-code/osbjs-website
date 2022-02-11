---
name: Matrix3 | math
---
# Matrix3
Represents a 3x3 matrix.
```typescript
let mat3 = new Matrix3(
	m11: number = 1, m12: number = 0, m13: number = 0,
	m21: number = 0, m22: number = 1, m23: number = 0,
	m31: number = 0, m32: number = 0, m33: number = 1
)
```
This will create an identity 3x3 matrix.

## Instance properties
- `m11`: 1st row, 1st col
- `m12`: 1st row, 2nd col
...
- `m33`: 3rd row, 3rd col
- `isIdentity`: Returns whether the matrix is the identity matrix.
- `translation`: Get the translation component of this matrix.

## Static properties
- `Identity`: Gets the identity matrix.

## Instance methods
### `determinant`, `det`
```typescript
mat3.determinant(): number
mat3.det() : number
```
Calculates the determinant for this matrix.

### `equals`
```typescript
mat3.equals(m: Matrix3): boolean
```
Returns a value that indicates whether this instance and another 3x3 matrix are equal.

### `clone`
```typescript
mat3.clone(): Matrix3
```
Returns a new Matrix3 and with identical elements to this one.

## Static methods
### `add`
```typescript
Matrix3.add(m1: Matrix3, m2: Matrix3): Matrix3
```
Adds each element in one matrix with its corresponding element in a second matrix.

### `sub`
```typescript
Matrix3.sub(m1: Matrix3, m2: Matrix3): Matrix3
```
Subtracts each element in a second matrix from its corresponding element in a first matrix.

### `multiply`
```typescript
Matrix3.multiply(m1: Matrix3, m2: Matrix3): Matrix3
```
Returns the matrix that results from multiplying two matrices together.

### `multiplyScalar`
```typescript
Matrix3.multiplyScalar(m: Matrix3, v: number): Matrix3
```
Returns the matrix that results from scaling all the elements of a specified matrix by a scalar factor.

### `transpose`
```typescript
Matrix3.transpose(m: Matrix3): Matrix3
```
Transposes the rows and columns of a matrix.

### `invert`
```typescript
Matrix3.invert(m: Matrix3, result: Matrix3): boolean
```
Inverts the specified matrix. The return value indicates whether the operation succeeded.

### `negate`
```typescript
Matrix3.negate(m: Matrix3): Matrix3
```
Negates the specified matrix by multiplying all its values by -1.

### `lerp`
```typescript
Matrix3.lerp(m1: Matrix3, m2: Matrix3, alpha: number): Matrix3
```
Performs a linear interpolation from one matrix to a second matrix based on a value that specifies the weighting of the second matrix.

### `createTranslation`
```typescript
Matrix3.createTranslation(v: Vector2): Matrix3
```
Creates a translation matrix from the specified 2-dimensional vector.

### `createRotation`
```typescript
Matrix3.createRotation(angle: number, center?: Vector2): Matrix3
```
Creates a rotation matrix using the given rotation in radians and a center point (if specified).

### `createScaleVec`
```typescript
Matrix3.createScaleVec(v: Vector2, center?: Vector2): Matrix3
```
Creates a scaling matrix from the specified vector scale and a center point (if specified).

### `createScaleScalar`
```typescript
Matrix3.createScaleScalar(s: number, center?: Vector2): Matrix3
```
Creates a scaling matrix that scales uniformly with the given scale and a center point (if specified).

### `createSkew`
```typescript
Matrix3.createSkew(angleX: number, angleY: number, center?: Vector2): Matrix3
```
Creates a skew matrix from the specified angles in radians and a center point (if specified).
