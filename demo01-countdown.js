function countdown(i) {
  console.log(i)
  if (i > 0) {
    countdown(i - 1)
  } else if (i === 0) {
    countdown('blastoff')
    return
  }
}
countdown(5) // This is the initial call to the function.
