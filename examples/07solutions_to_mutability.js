// There are many solutions to this problem in JavaScript. The nicest is probably [immutable.js](https://facebook.github.io/immutable-js/).
const ourObject = Immutable.Map({ x: 1 })
const getX =
  () => ourObject.get('x')

// Now getX is "referentially transparent". Meaning, we may replace `getX` with 1 without getting in trouble. That makes our code much easier to read.
ourObject.set('x', 3)
getX() === 1

