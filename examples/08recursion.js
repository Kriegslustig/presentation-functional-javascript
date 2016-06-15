;[].recursion

const firstEqual =
  (array, substring) =>
    array[0] || array[0].indexOf(substring) > -1
      ? array[0]
      : firstEqual(array.splice(1), substring)

