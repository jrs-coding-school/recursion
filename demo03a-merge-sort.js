const mergeSort = arr => {
  if (arr.length < 2) {
    return arr
  }

  const length = arr.length
  const middle = Math.floor(length / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle, length)
  console.log('leftArr', leftArr, 'rightArr', rightArr)
  return stitch(mergeSort(leftArr), mergeSort(rightArr))
}

const stitch = (left, right) => {
  const results = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
  const concatResult = results.concat(left, right)
  console.log('stiched', concatResult)
  return concatResult
}

console.log(mergeSort([2, 5, 3, 1, 4, 6, 9, 8]))
