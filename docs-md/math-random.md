---
name: Random numbers | math
---
# Random numbers

### `randInt`
```typescript
randInt(low: number, high: number): number
```
Random integer in the interval [low, high].

### `randFloat`
```typescript
randFloat(low: number, high: number) : number
```
Random float in the interval [low, high].

## Noise functions
All of the noise functions below return a number in range from -1 to 1. The result is not actually random; it is based on Simplex noise, which means that the return values for two input values that are near one another tend to be near one another. This type of noise is useful when you want a sequence of seemingly random numbers that don’t vary wildly from one to the other.

### `noise2D`
```typescript
noise2D(x: number, y: number) : number
```

### `noise3D`
```typescript
noise3D(x: number, y: number) : number
```

### `noise4D`
```typescript
noise4D(x: number, y: number) : number
```
