# atr
A extension to the `at` method that can also replace the element!

This can be used as a drop-in replacement for the `at` method, the only difference is that it takes the array as an argument.

## Examples

```ts
let arr = [1,2,3,4]

// this replaces the last element with 3 and returns the last element, which would be 3
atr(arr, -1, 3)

// [1,2,3,3]
console.log(arr)
```

You can also just use it normally

```ts
let arr = [1,2,3,4];

// 4
console.log(atr(arr, -1));
```
