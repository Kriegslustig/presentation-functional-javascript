;[].mutability
// // In JavaScript objects are mutable. That means
// const ourObject = { x: 1 }
// const getX =
//   () => ourObject.x
// 
// // We might expect `getX` to always be 1. But at any point we may change our object.
// ourObject.x = 3
// // `getX` will now return 3. In functional programming you want "Referential transparency". That means, that any expression should be replacable by it's result. So our `getX` function should be replacable with 1 and the program should then still run all the same. Which is not the case of course. That's not the case here. The problem is of course, that this makes programming a bit messy and more confusing.
// getX() === 3

