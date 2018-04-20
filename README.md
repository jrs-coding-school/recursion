# recursion

JRS Coding School simple repo with demo and exercises.

## Definition

Recursion is when you define something in terms of itself.

re·cur·sion (rəˈkərZHən) - the repeated application of a recursive procedure or definition. See recursion.

> “In order to understand recursion, one must first understand recursion.”

Recursion is a function that calls itself.

```js
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
```

```bash
$ node demo01-countdown.js
5
4
3
2
1
0
blastoff
```

## benefits of recursion

* Typically leads to less code.
* Recursion sometimes can make the code very simple for some problems
* Ability to maintain state at different levels of recursion.

## call stack

* Recursive functions affect the _call stack_.
* In computer science, a call stack is a stack data structure that stores information about the active subroutines of a computer program.
* The call stack is also known as an execution stack, program stack, control stack, run-time stack, or machine stack, and is often shortened to just "the stack".
* When a program calls a function, that function goes on top of the call stack. This similar to a stack of books.
* You add things one at a time.
* Ability to maintain state at different levels of recursion.
* When a function completes, the item is taken off the top of the stack.

## disadvantages of recursion

* No performance benefit over iterating through a loop.
* Remember, a recursive function calls itself. How many times is it going to call itself?
* Every time the function is called the computer adds a call onto the stack.
* Too many calls and you will blow the stack. **This is bad**. This is known as _stack overflow_.

## 3 key features of recursion

Make sure the recursive functions that you write exhibit these 3 attributes.

1. A Termination Condition

We'll use an example of a recursive function named `power` to compute the exponent of a number. The exponent of a number says how many times the base number is used as a factor. A base number of 8 to the power of 3 would result in 8 \* 8 \* 8 = 512. Here 8 is the base and 3 is the exponent.

```js
power(8, 3) // => 512
```

We don't want to blow the stack or recurse over bad input. A termination condition stops program execution (`return`) if something bad happens, like a bad data value being provided to the function. Let's say a function should not accept a negative number as its argument, simply check for that condition and return if true:

```js
const power = function(base, exp) {
  // A Termination Condition
  // this function will only work with non-negative integer exponents
  // if exp is negative, return undefined
  if (exp < 0) {
    return
  }
  ...
```

2. a base case

The base case stops recursion just like the termination condition. However, the base case represents our goal of the recursion. For example, if you were looking through a tree of folders and files on your hard drive looking for a particular file, you would recurse all the directories and files until you found the file. Your goal in this case would be finding the file. Once found you would return some sort of result, such as the directory location of the file, and cease recursion.

In the case of our `power` function, once we’ve recursed to the point where the exponent value is down to zero, we have found the goal of the recursion in this case. We return a result of 1 from the function to the previous caller in the stack.

```js
const power = function(base, exp) {
  if (exp < 0) {
    return
  } else if (exp === 0) {
    return 1
  }
  ...
```

3. the recursion

You recurse by having the function call itself. Each time we recurse, we place a call on the call stack including the base and exponent argument values at that point in time.

> Each time we recurse, we place a call on the call stack including the state of the argument values at that point in time

Below the recursion is happening in the following statement `return base * power(base, exp - 1)`. We're calling the `power` function passing the `base` number and the current exponent value minus 1. Each time we recursively call the function, the call is placed onto the stack. The recursion repeats until we reach the base case where an exponent value of 1 is returned to the previous caller in the stack where the value of 1 is then multiplied the base number and the result is returned to the previous call in the stack which in turn multiplies the base by the result, and so on. The process repeats until there are no more calls left on the stack and the final result is returned.

Here's an attempt to explain what each call looks like on the stack to find the value of 4 to the power of 3. That is 4 \* 4 \* 4 = 64.

* step 1) original call -- power(4,3) makes recursive call and returns 4 \_ 16 => 64
* step 2) 4 \_ power(4, 3 - 1) makes a recursive call and returns (4 \* 4) => 16 up the \* stack
* step 3) 4 \_ power(4, 2 - 1) makes a recursive call and returns (4 \* 1) => 4 up the stack
* step 4) power(4, 2 - 1) => base case. recursion stops. the stack begins to unwind and 1 is returned up the stack.

```js
const power = function(base, exp) {
  if (exp < 0) {
    return
  } else if (exp === 0) {
    return 1
  } else {
    return base * power(base, exp - 1)
  }
}
```

## exercise 1

* Write a recursive function to calculate the factorial of a number.
* Name the function `factorial`.

  5! = 5 _ 4 _ 3 _ 2 _ 1.

  An call to factorial with a value of 5 should return 120:

  ```js
  factorial(5) // 120
  ```

## exercise 2

* Create a function named `sum`. Find the sum of an array of numbers recursively.
