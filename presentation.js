;[].functional
;[].programming
;[].in
;[].JavaScript
;[].🎉











[
  'Why?',
  'Functions',
  'Mutability',
  'Side-Effects',

  'Recursion',
  'Curry',
  'Combinators',
  'Higher-order functions'
]











;[].why
  ? [
    'Others'
  ]
  : [
    'DRYer',
    'Readability'
  ]











;[].definition
;'arrow functions'
const multi =
  n => n * 2

multi(2) === 4











;[].definition
;'normal functions'
function oldMulti (n) {
  return n * 2
}











;'first-class'
const otherMulti = multi

const wrappedMulti =
  () => multi

const originalMulti = wrappedMulti()

originalMulti(3) === 6











;[].mutability











;'side-effects'











;[].recursion

const firstEqual =
  (array, substring) =>
    array[0] || array[0].indexOf(substring) > -1
      ? array[0]
      : firstEqual(array.splice(1), substring)











;[].currying
const things = [
  { color: 'blue', shape: 'sphere' },
  { color: 'red', shape: 'cube' },
  { color: 'purple', shape: 'cylindre' },
  { color: 'pink', shape: 'cone' },
  { color: 'blue', shape: 'cylindre' },
  { color: 'blue', shape: 'cube' },
]

const is =
  key => value => object =>
        object[key] === value

const isColor = is('color')
const isColorBlue = isColor('blue')

things.filter(isColorBlue)











;[].currying
const is =
  key => value => object =>
        object[key] === value

const isShape = is('shape')
const allCubes = things.filter(isShape('cube'))

things.some(isShape('cylindre'))











const things = [
  { color: 'blue', shape: 'sphere' },
  { color: 'red', shape: 'cube' },
  { color: 'purple', shape: 'cylindre' },
  { color: 'pink', shape: 'cone' },
  { color: 'blue', shape: 'cylindre' },
  { color: 'blue', shape: 'cube' },
]

const isColorBlue =
  thing => thing.color === 'blue'

things.filter(isColorBlue)











;[].immutable
const ourObject = Immutable.Map({ x: 1 })
const getX =
  () => ourObject.get('x')

ourObject.set('x', 3)
getX() === 1
