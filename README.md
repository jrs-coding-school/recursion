# recursion

JRS Coding School simple repo with demo and exercises.

## Definition

Recursion is when you define something in terms of itself.

re·cur·sion  (rəˈkərZHən) - the repeated application of a recursive procedure or definition.  See recursion.

>  “In order to understand recursion, one must first understand recursion.”

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

- Recursion can make the code very simple for some problems
- Ability to maintain state at different levels of recursion.
- Leads to less code.
- Ability to maintain state at different levels of recursion. 

## call stack

- Recursive functions use something called “the call stack.” 
- In computer science, a call stack is a stack data structure that stores information about the active subroutines of a computer program. 
- When a program calls a function, that function goes on top of the call stack. This similar to a stack of books. 
- You add things one at a time.
- Ability to maintain state at different levels of recursion. 
- In other words, you can’t access a value within an item in the stack from another item in the stack.
- Then, when you are ready to take something off (when the function call is completed), you always take off the top item in the stack. 

## disadvantages of recursion 

- No performance benefit over iterating through a loop. 
- This kind of stack is also known as an execution stack, program stack, control stack, run-time stack, or machine stack, and is often shortened to just "the stack". 
- Remember, a recursive function calls itself.  How many times is it going to call itself?
- Every time the function is called the computer adds a call onto the stack.
- Too many calls and you will blow the stack. **This is bad**. This is known as _stack overflow_. 


## exercise 1 

- Write a recursive function to calculate the factorial of a number.
- Name the function “factorial”

  ```
  5! = 5 * 4 * 3 * 2 * 1. 
  ```

  ```
  factorial(5)  // 120
  ```

## exercise 2

- Create a function named `sum`. Find the sum of an array of numbers recursively.
