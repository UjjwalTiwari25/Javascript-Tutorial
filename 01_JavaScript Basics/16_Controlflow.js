/*
Conditional Statements:
Conditional statements allow you to make decisions in your code.
 Based on the condition provided, different blocks of code are executed.

 */
//. if-else Statement:
let age = 18;

if (age >= 18) {
  console.log('You are an adult.');  // Executes if the condition is true
} else {
  console.log('You are a minor.');   // Executes if the condition is false
}


// b. else if Statement:
// The else if statement is used for multiple conditions, 
// providing different outcomes based on which condition evaluates to true

let score = 75;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 75) {
  console.log('Grade: B');  // This block will be executed
} else {
  console.log('Grade: C');
}


// c. switch Statement:
// The switch statement is an alternative to using multiple else if conditions. 
// It checks a value against multiple cases and executes the matched one.
let day = 'Tuesday';

switch (day) {
  case 'Monday':
    console.log('Start of the week');
    break;
  case 'Tuesday':
    console.log('Second day of the week');  // This block will run
    break;
  default:
    console.log('Unknown day');
}


//*********************************************Practice********************* */
const score1 = 90;

if (score1 >= 50) {
    const power ="fly"
    console.log(`user power ${power}`);
}
// console.log(`user power ${power}`);// power is not defined....which is perfect ..but 
// yehi hm agar const power k jagah var power use karte to ye run kar jata jo ki nhi karna chahiye



//Implicit scope

let balance= 1000;
if (balance > 500) console.log("paisa hai");  //aise v likh sakte hai


//******************************************nesting*********************** */
if (balance < 500) {
    console.log("paisa nhi hai");
}
else if (balance < 750) {
    console.log("paisa nhi hai");
}
else if (balance < 950) {
    console.log("paisa nhi hai");
}
else {
    console.log("paisa hai");
}


    //another real life example
    const userLoggedIn = true;
    const userHasBalance = true;
    const userHasCreditCard = true;
    const userHasCupon = true;

    if (userLoggedIn && userHasBalance && userHasCreditCard) {
        console.log("Bhai tum mere mall mi aa sakte ho");
    }
   if(userHasBalance || userHasCupon){
       console.log("Bhai tum mere mall aa sakte ho");
   }
    else {
        console.log("Bhai tum mere mall nhi aa sakte ho");
    }

    



//**************************************Switch statement************************************* */
// switch(key){
//     case value ;
//     break;
//     case value;
//     break;
//     default;
//     break;
// }

const day1 = "Sunday";

switch (day1) {
  case 1: "Monday"
    console.log("Start of the week");
    break;

  case 2: "Tuesday"
    console.log("Second day of the week");
    break;

  default:
    console.log("Unknown day");
}

//*******************************************************Truthy and falsy value********************* */
// Falsy value:
//  false , 0 , -0 , null , undefined , NaN , "" , BigInt (0n) 
// Truthy value:
//  true , "0" , " " , [] , {} , 1 , 2 , "false" , "true" , BigInt (1n)
// string k andar kuchh v truthy value 

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}



//******************************Nullish Coalescing Operator **************************/
/*The nullish coalescing operator (??) in JavaScript is used to provide a default value when dealing with null or undefined. 
It returns the right-hand operand only if the left-hand operand is null or undefined, otherwise, it returns the left-hand operand.

*/
// let result = leftOperand ?? rightOperand;
 //If the leftOperand is null or undefined, it returns the rightOperand.
// Otherwise, it returns the leftOperand.

let val1;
// val1=5 ?? 10;
val1 =null ?? 10;  //pahla null ya undefined hoga to tab dusra assign hoga otherwise pahla he assign hoga
 val1 =undefined ?? 10;
console.log(val1); // 5

//******************************Ternary Operator **************************/
//condition ? true : false

const icePrice = 100;
icePrice>=80 ? console.log("Iced Coffee") : console.log("Hot Coffee");