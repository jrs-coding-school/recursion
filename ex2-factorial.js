/*
To get the factorial of a number you multiply that number by
 itself minus one until you reach the number one.

Example 1: The factorial of 4 is 4 * 3 * 2 * 1, or 24.
Example 2: The factorial of 2 is just 2 * 1, or 2.
*/

function factorial(x) {
  if (x < 0) {
    return
  } else if (x === 1) {
    return 1
  } else {
    return x * factorial(x - 1)
  }
}

console.log('factorial(5) is', factorial(5))
