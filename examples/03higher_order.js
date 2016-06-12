// Here we have an array of things. They each have a color and a shape.
const things = [
  { color: 'blue', shape: 'sphere' },
  { color: 'red', shape: 'cube' },
  { color: 'purple', shape: 'cylindre' },
  { color: 'pink', shape: 'cone' },
  { color: 'blue', shape: 'cylindre' },
  { color: 'blue', shape: 'cube' },
]

// Arrays have a property `filter`, which we can use to get all elements that match some selector.
// Here we define a function that takes a thing, as defined above as an argument. It then checks wether or not that things color is blue.
const isColorBlue =
  thing => blue.color === 'blue'

// The `filter` function takes a selector as an argument. This selector is.
things.filter(isColorBlue)

