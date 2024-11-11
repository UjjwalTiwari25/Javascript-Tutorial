/*In JavaScript, code execution is managed by the JavaScript engine (like V8 in Chrome) using a call stack. 
The call stack is a data structure that follows the LIFO (Last In, First Out) principle,
 which helps in managing function calls and tracking their execution.


 *************************************************************************************
 Single-Threaded Nature:
JavaScript is single-threaded, meaning it can only do one thing at a time.
 The call stack allows JavaScript to execute code sequentially, 
 keeping track of where each function call is in the execution.
  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  Execution Phases:
a. Global Execution Context:

When a JavaScript program is executed, the global execution context is created first, 
which contains global variables and functions.
 This is the default context in which the code runs.

 b. Function Execution Context:

Each time a function is invoked, a new execution context is created for that function. 
This context contains local variables, the this keyword reference, 
and the environment the function was called from.

 */
function first() {
    console.log('First Function');
    second();
}

function second() {
    console.log('Second Function');
    third();
}

function third() {
    console.log('Third Function');
}

first();


/*
Call Stack Execution:

Global Execution Context is created.

The first() function is called:
first() is pushed onto the call stack.

Inside first(), second() is called:
second() is pushed onto the stack.

Inside second(), third() is called:
third() is pushed onto the stack.

third() executes and completes:
third() is popped off the stack.

second() completes:
second() is popped off the stack.

first() completes:
first() is popped off the stack.

*/
