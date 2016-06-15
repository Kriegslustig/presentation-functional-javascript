;'first-class'
// Functions are first-class citizens in javascript. This means, that we can treat it like any other value. For an example, we can assign it to a variable.
const otherMulti = multi

// Functions can also be returned from other functions. Here wrappedMulti returns multi.
const wrappedMulti =
  () => multi

// When we executre that function, we get our original function.
const originalMulti = wrappedMulti()

// Which is still the same
originalMulti(3) === 6

