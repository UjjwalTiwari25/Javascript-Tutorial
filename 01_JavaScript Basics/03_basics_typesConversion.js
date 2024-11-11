/* Type conversion in javascript
         
    1.Implicit conversion( type coercion):js automatically converts data types
    2.Explicit conversion:user  have to explicitly convert data types

*/
//1.Implicit conversion
//1.1 Number to String
let result = 5 + "5";  // "55" (number 5 is coerced to a string)
console.log(result);

//1.2 String to Number
let result2 = "10" - 5;  // 5 ("10" is coerced to a number)
console.log(result2);

let result3 = "10" * "2";  // 20 (both strings are coerced to numbers)
console.log(result3);

let score ="33"

//we can check type in two ways..
console.log(typeof score);
console.log(typeof(score));

//2. Explicit conversion
let score1="33"
console.log(typeof score1);

let valueInNumber = Number(score1);//explicitly changing type of number from string to number
console.log(typeof valueInNumber);

let score3 ="33abc"
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);//NaN(not a number)....inka type jo hai oo number hogya hai but value is NaN


let score4 =null;
let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);//0


let score5 =undefined;
let valueInNumber5 = Number(score5);
console.log(typeof valueInNumber5);
console.log(valueInNumber5);//NaN

let score6 =true;
let valueInNumber6 = Number(score6);
console.log(typeof valueInNumber6);
console.log(valueInNumber6);//1

let isLoggedIn =1;
let booleanValue = Boolean(isLoggedIn);
console.log(typeof booleanValue);
console.log(booleanValue);//true

let isLoggedIn2 =0;
let booleanValue2 = Boolean(isLoggedIn2);
console.log(typeof booleanValue2);
console.log(booleanValue2);//false


let isEmpty ="";
let booleanValue3 = Number(isEmpty);
console.log(typeof booleanValue3);
console.log(booleanValue3);//false  

let score7="ujjwal";
let valueInNumber7 = Number(score7);
console.log(typeof valueInNumber7);
console.log(valueInNumber7);

let score8="33";//converting string to number
let valueInNumber8 = Number(score8);
console.log(typeof valueInNumber8);
console.log(valueInNumber8);

let score9=23;//converting number to string
let valueInNumber9 = String(score9);
console.log(typeof valueInNumber9);
console.log(valueInNumber9);




