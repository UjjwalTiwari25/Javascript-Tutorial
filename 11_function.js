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
