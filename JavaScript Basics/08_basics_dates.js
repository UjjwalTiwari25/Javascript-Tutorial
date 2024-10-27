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
console.log(typeof myDate);//object

let specificDate = new Date(2020, 11, 25);  // Year, Month (0-based), Day
console.log(specificDate.toDateString());  // Outputs: Dec 25, 2020

let specificDate1 = new Date(2020, 11, 25 ,5 ,20, 30);  // Year, Month (0-based), Day
console.log(specificDate1.toLocaleDateString());  // Outputs: Dec 25, 2020

let myCreatedDate = new Date("10-01-2024");
console.log(myCreatedDate.toLocaleString());

//getting exact time stamp from the date
console.log(myCreatedDate.getTime());

//Getting exact time stamp directly
let myTimeStamp = Date.now();
console.log(myTimeStamp);

//converting millisecond into second...and taking flor value
console.log(Math.floor(Date.now()/1000));



//Getting Date and Time Components
// You can extract different parts of a date using methods provided by the Date object:
let now = new Date();

console.log(now.getFullYear());   // Gets the year (e.g., 2024)
console.log(now.getMonth());      // Gets the month (0-11, where 0 is January)
console.log(now.getDate());       // Gets the day of the month (1-31)
console.log(now.getDay());        // Gets the day of the week (0-6, where 0 is Sunday)
console.log(now.getHours());      // Gets the hour (0-23)
console.log(now.getMinutes());    // Gets the minutes (0-59)
console.log(now.getSeconds());    // Gets the seconds (0-59)
console.log(now.getMilliseconds());// Gets the milliseconds (0-999)


//Setting Date and Time Components
//You can also set different parts of the date:
let now1 = new Date();

now1.setFullYear(2025);        // Sets the year to 2025
now1.setMonth(11);             // Sets the month to December (11)
now1.setDate(31);              // Sets the day of the month to 31
now1.setHours(23);             // Sets the hour to 23 (11 PM)
now1.setMinutes(59);           // Sets the minutes to 59
now1.setSeconds(59);           // Sets the seconds to 59

console.log(now1.toUTCString());  // Outputs: Dec 31, 2025, 23:59:59

console.log(`Today date is ${now1.toDateString()} and time is ${now1.toTimeString()}`);


///Getting Customized Date

let newDate = new Date();

let formattedDate = newDate.toLocaleString('default', {
    year: 'numeric',
    month: 'short',   // Correct value for abbreviated month
    day: 'numeric',   // Correct value for day
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});

console.log(formattedDate);
