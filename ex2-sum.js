function sum(acc, arr) {
  console.log('acc', acc, 'arr', arr)
  if (arr.length === 0) {
    return acc
  } else if (arr.length === 1) {
    return acc + arr[0]
  } else {
    /*
    The slice() method returns a shallow copy
     of a portion of an array into a new array object
     selected from begin to end (end not included).
    The original array will not be modified.
    */
    return sum(acc + arr[0] + arr[1], arr.slice(2))
  }
}

console.log('sum(0, [9000,900,90,9,1])  // =>', sum(0, [9000, 900, 90, 9, 1]))
