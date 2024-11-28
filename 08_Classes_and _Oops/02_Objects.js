function multiplyBy5(num) {
    return num * 5; // Multiplies the input 'num' by 5
}

// Assigning a property `power` to the function
multiplyBy5.power = 5;

// Calling the function with an argument
console.log(multiplyBy5(5)); // Output: 25

// Accessing the property `power` defined on the function
console.log(multiplyBy5.power); // Output: 5

// Accessing the prototype of the function
console.log(multiplyBy5.prototype); // Output: {}
