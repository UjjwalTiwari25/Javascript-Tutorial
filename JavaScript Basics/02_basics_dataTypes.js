"use strict";//treat all code as newer version
// alert("Hello World");...aise use hm browser k console mi karte hai..node mi v use kar sakte hai but uska alag tarika hai..
/*we can also run our code successfully without using semicolon in js(;)...but its not a good practice for code readability*/

/*Data types in js:
1. Primitive data types: undefined, null, boolean, string, number, symbol, bigint
2. Reference data types: arrays, objects
3. Non-primitive data types: functions, regex, dates, maps, sets*/

//examples of primitive data types
let name ="ujjwal";//string
let age = 25;//number...range of number is -2^53 to 2^53
let isMarried = true;//boolean
let city = undefined;//undefined
let country = null;//null
let symbol = Symbol();//symbol is used when we want to create unique value

//null: null manually assign ki gayi value hoti hai, jo yeh indicate karti hai ki variable ka value khaali (empty) hai ya intentionally koi value nahi hai.
//undefined: undefined tab aata hai jab koi variable declare toh kiya jata hai, lekin usse koi value assign nahi ki gayi hoti.

let a = null;       // a has been explicitly assigned no value (empty)
let b;              // b is declared but not initialized
console.log(b);     // Output: undefined

//examples of reference data types
let arr = [1, 2, 3, 4, 5];
let obj = { name: "ujjwal", age: 25 };
console.log(typeof age);//number
console.log(typeof arr);//object
console.log(typeof null);//object
console.log(typeof undefined);//undefined

//examples of non-primitive data types

function greet(name) {  
    // A function 'greet' is defined which takes one parameter 'name'
    console.log("Hello " + name);  
    // It logs "Hello" followed by the name passed to it
}

let func = greet;  
// A new variable 'func' is assigned the 'greet' function, so now 'func' refers to the same function as 'greet'

func("ujjwal");  
// The 'func' function is called with "ujjwal" as the argument, so it outputs: "Hello ujjwal


//function can be treated as a variable in javaascript...

/**
 * Logs a simple "Hello" message to the console.
 */
const myFunction = function()
{
    console.log("Hello");
}

//return types of non premitive data types is object..
//but return types of function is called object function
//..but it gives only function in output..example bellow 👇

console.log(typeof myFunction);//function