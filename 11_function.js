// functions are one of the most important building blocks. 
//They allow you to organize code into reusable blocks

// 1.function declaration
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(3, 5)); // Output: 8


// 2. function expression
const multiplyNumbers = function(a, b) {
    return a * b;
};

console.log(multiplyNumbers(4, 6)); // Output: 24

//********************************************************************************* */
//Important concepts
function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers();//Output: NaN
addNumbers(3, 5);//Output: 8
console.log(addNumbers(3, 5));//undefined aayega...because addNumbers is not returning anything..ye bas console.log k wajah se print kiya hai

//agar return value chahiye to return keyword use karenge
function addNumbers(a, b) {
    let result = a + b;
    return result;
}
console.log(addNumbers(3, 5));

//**************Arrow function********************************************************************* */

//Arrow functions provide a concise way to write functions and they do not bind their own this.
//  They are commonly used in callbacks and array methods

/*const functionName = (parameters) => {
    // code to be executed
    return value; // optional
};
*/

const greet2 = (name) => `Hello, ${name}!`;

console.log(greet('Ujjwal')); // Output: Hello, Ujjwal!


//*****************************Parameters and arguments**************************************************************** */
//Parameters are the variables defined in the function signature.
// Arguments are the values passed to the function when it is invoked.

function greet(name) { // 'name' is a parameter
    console.log(`Hello, ${name}`);
}

greet('Virat'); // 'Virat' is an argument


//Default parameters

//Default parameters allow you to initialize function parameters with default values 
//if no arguments are passed or undefined is passed.

function greet1(name = 'Guest') {//here we have given default value as guest ...agar kuchh pass nhi karenge to guest ayega 
    console.log(`Hello, ${name}`);
}

greet1(); // Output: Hello, Guest
greet1('Ujjwal'); // Output: Hello, Ujjwal

//another example
function loginUserMessage(username){
    return `${username} logged in.`
}
loginUserMessage('Ujjwal');//yeha function return hogya hai but hamne ise print karne ko to nhi bola na kahi
console.log(loginUserMessage('Ujjwal'));
console.log((loginUserMessage()));//undefined logged in....agar hmkoi value he pass na kre to oo undefined ata hai null nhi ata


//we can use if else here
function loginUserMessage1(username1){
    if(username1 === undefined){
        console.log("Please enter username");
        return;
    }
    
        return '${username1} just logged in.'
}
// console.log(loginUserMessage1('Ujjwal'));
console.log(loginUserMessage1());


//*****************************Rest parameters and arguments**************************************************************** */
/*The rest parameter is indicated by three dots (...) ,called rest operator

The rest parameter in JavaScript allows you to represent an indefinite number of arguments as an array. 
It is useful when you don't know how many arguments will be passed into a function and want to handle them in a flexible way.

Commonly used when we make shopping card..where user can add any number of items

*/

function calculateCardPrice(...items) {
    return items;
} 
console.log(calculateCardPrice(10));//Output: [ 10 ]
console.log(calculateCardPrice(10, 20, 30));//Output: [ 10, 20, 30 ]

//why it is called rest parameter?
function calculateCardPrice1(val1,val2,...items) {
    return items;
}
console.log(calculateCardPrice1(10,20,30,40,50));//Output: [ 30, 40, 50 ]...it will give rest output..it does not include value of val1 and val2


//*********************Passing object into function**************** */
 const user ={
     name:"Ujjwal",
     age:21
 }
 function handleObject(anyobject){
     console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
 }
//  handleObject(user);


//aise v directly object pass kr sakte hai
handleObject({
    name:"Sam",
    age:22
})

//passing array in function

const myArray = [10, 20, 30];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myArray));  // Output: 20


//******************************************Anonymous function****************** */
/*Anonymous Functions
Yeh wo function hota hai jiska koi naam nahi hota.
Iska zyada use tab hota hai jab hume ek function ko as a argument pass karna ho ya phir turant execute karna ho.
Example mein setTimeout ek built-in function hai jo ek anonymous function ko run karta hai 3 seconds ke baad:
*/
setTimeout(function() {
    console.log('This message is delayed by 3 seconds');
}, 3000);


//***************************Callback function********************************** */

/*Callback Functions
Callback function wo function hota hai jo kisi doosre function mein as a argument pass kiya jata hai, 
aur jab main function apna kaam kar leta hai to wo callback ko call karta hai.
Example mein mainfunction ek function hai jo ek callback ko leta hai, aur 3 seconds ke baad callback ko call karta hai:
 */

function mainfunction(callback) {
    console.log("Performing operations");
    setTimeout(function() {
        callback("Operation completed");
    }, 3000);
}
function callbackFunction(result) {
    console.log("Result: "+result);
    }

mainfunction(callbackFunction);

/*Yahaan mainfunction ke andar humne callbackFunction ko as a argument pass kiya. 
Jab 3 seconds ka delay khatam hota hai, to callbackFunction ko "Operation completed" message ke sath call kiya jata hai.

Pehle mainfunction ke through "Performing operations" print hoga.
Phir 3 seconds ke baad, callback function call hoga aur result print karega: 
"Result: Operation completed"
*/