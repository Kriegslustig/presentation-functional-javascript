// The following expression defines a function. Functions created using the `=>`-syntax are called "Arrow-Functions". The `x` before the arrow defines a parameter `x` that will be available inside the function body. The function body of an arrow function can be defined with or without wrapping curly braces (`{}`). If you ommit the curly braces, the expression inside the body is implied to be the return value. So since our `multi` function doesn't have wrapping curly braces, `n * 2` is returned implicitly.
// Arrow functions have some interesting properties. More on this [here](https://ponyfoo.com/articles/es6-arrow-functions-in-depth).
// `const` stands for constant and initializes a variable that cannot be overriden. That means, that we can't define another variable with the same name inside this context:
// ```js
// {
//  const extremelyConstant = 1
//  var extremelyConstant = 2 // !!! Error extremelyConstant is already defined.
// }
// ```
const multi =
  n => n * 2

multi(2) === 4

