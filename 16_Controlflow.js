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
