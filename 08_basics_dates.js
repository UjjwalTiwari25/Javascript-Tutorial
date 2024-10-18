// In JavaScript, dates are handled using the built-in Date object,
//  which allows you to work with dates and times easily. 
// Here’s how you can create, manipulate, and format dates in JavaScript:

let myDate =new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getTime());  //number of milliseconds since January 1, 1970


let specificDate = new Date(2020, 11, 25);  // Year, Month (0-based), Day
console.log(specificDate);  // Outputs: Dec 25, 2020
