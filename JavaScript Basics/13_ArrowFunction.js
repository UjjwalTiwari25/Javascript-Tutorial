/* Understanding this keyword
In a method, this refers to the object that owns the method.
In the global context, this refers to the global object (window in browsers).
*/
const user ={
    userName:"Ujjwal",
    price : 999,
    welcomeMessage: function(){
        console.log(`Welcome ${this.userName}`)  //this keyword use for refering current context
        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "Kohli" //yeha pr hamne context change kr diya
// user.welcomeMessage()
console.log(this);  

//************************************************************************ */
/*Strict Mode: If you use "use strict", this inside a function will be undefined 
if the function is called in the global context.


*/
function chai (){
    let username = "Ujjwal";
    console.log(this.username);
}

chai();//undefined

//It means this keywaord is working only in object not in function

//In Regular Functions: In non-arrow functions, this depends on how the function is invoked. 
// If you just call the function normally, 
// this will refer to the global object (in non-strict mode).

function showThis() {
    console.log(this);
}

showThis();  // Output: In non-strict mode, it prints the global object (window in browsers)



//+++++++++++++++++++++++++++***************+++++++++++++++++++++++++++++++++++++++

//Arrow Function

// ()=>{}....arrow function
//we can store it in variable and we can also pass parameter..now it looks like...

const arrowFunction = () => {
    let username = "Ujjwal";
    console.log(this);
}


const addTwo = (a,b) => {   //curly bracket  use krenge to return keyword use karna padega
    return a+b;
}

console.log(addTwo(10,20));

//implicit return

const multiplyTwo = (a,b) => (a*b)   //parenthesis use kiye to return keyword use nhi karenge
console.log(multiplyTwo(10,20));

//using object in arrow function
const user5 = (num1,num2)=> ({num1,num2});   //isme parenthsis k andar curly bracket v use karna padega
console.log(user5(10,20));


