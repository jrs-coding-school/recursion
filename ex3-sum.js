// ES6 With Arrow Function and Array destructing assignment operators

/*
head - Return the first item in an array.
       Is useful when you need to separate the first item from the rest of the array
       items. To do this, we make use of destructuring assignment.
tail - use spread operator (...) to return all but the first item in an array.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
*/
const sum = (acc, [head, ...tail]) =>
  typeof head === 'undefined' ? acc : sum(acc + head, tail)

console.log('sum(0, [9000,900,90,9,1])  // =>', sum(0, [9000, 900, 90, 9, 1]))

//  Awld Skool - Non ES6 way. sums the array but with more code
// function sum(acc, arr) {
//   console.log('acc', acc, 'arr', arr)
//   if (arr.length === 0) {
//     return acc
//   } else if (arr.length === 1) {
//     return acc + arr[0]
//   } else {
//     /*
//     The slice() method returns a shallow copy
//      of a portion of an array into a new array object
//      selected from begin to end (end not included).
//     The original array will not be modified.
//     */
//     return sum(acc + arr[0] + arr[1], arr.slice(2))
//   }
// }
