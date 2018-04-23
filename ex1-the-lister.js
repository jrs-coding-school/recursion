/*
Create a recursive function named "lister" that takes two parameters:
 1) max - the maximum number of items in the list.
 2) current - the current number in the list.

Calling lister(6,1) with a maximum of 6 and the current item of 1
  should log each item to the console like this:

1.
2.
3.
4.
5.
6. */

function lister(max, current) {
  if (current > max) {
    return
  }
  console.log(`${current}.`)
  lister(max, current + 1)
}

lister(6, 1)
