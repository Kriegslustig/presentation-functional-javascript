;[].currying
// Here are our things again
const things = [
  { color: 'blue', shape: 'sphere' },
  { color: 'red', shape: 'cube' },
  { color: 'purple', shape: 'cylindre' },
  { color: 'pink', shape: 'cone' },
  { color: 'blue', shape: 'cylindre' },
  { color: 'blue', shape: 'cube' },
]

// Now it's getting interessting. Here we have a function returning a function returning a function returning a boolean. Sounds complicated, but it's actualy a really simple and powerful priciple called currying. So we have three nested functions, each taking a single argument.
const is =
  key => value => object =>
        object[key] === value

// When we make a call to the `is` function, we get a new function. This new function has the `key` argument bound to it.
const isColor = is('color')
// When calling the new function `isColor` function, the passed parameter is bound to the `value` argument of the newly returned function.
const isColorBlue = isColor('blue')

// `isColorBlue` is a function accepting a single argument, `object` and returns a boolean value. We can now pass that function into a filter call and we'll get all blue elements back.
things.filter(isColorBlue)

