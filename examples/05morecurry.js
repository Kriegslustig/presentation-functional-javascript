// Here; our old `is` function again. I assume you still remember our `things` array.
const is =
  key => value => object =>
        object[key] === value

// We can to that `is` same function to search for different things.
const isShape = is('shape')
const allCubes = things.filter(isShape('cube'))

// Or may be check if there's a cylindre inside our `things` array.
things.some(isShape('cylindre'))

