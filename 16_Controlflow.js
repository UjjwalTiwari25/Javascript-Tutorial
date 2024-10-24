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
