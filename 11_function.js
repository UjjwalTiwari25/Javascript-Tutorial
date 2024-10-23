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

function greet1(name = 'Guest') {
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