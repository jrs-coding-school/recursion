const power = function(base, exp) {
  if (exp < 0) {
    return
  } else if (exp === 0) {
    return 1
  } else {
    return base * power(base, exp - 1)
  }
}

console.log('power(8, 3) is: ', power(8, 3))
//   power(4,3)
//   returns 4 * (power(4, 2) = 16) => 64 final result
//   returns 4 * (power(4, 1) = 4) => 16
//   returns 4 * (power(4, 0) = 1) => 4
