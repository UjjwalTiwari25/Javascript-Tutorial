/*Strings:
A string is a sequence of characters enclosed in single, double, or backticks.
Strings are immutable and can be manipulated using various methods.

*/
const name = "Prisha";
const repoCount = 10;
console.log(name + repoCount + "value");//this is not good way of taking outputs

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

let name2= "John";      // Double quotes
let greeting = 'Hello'; // Single quotes
let combined = `Hi, ${name2}!`; // Template literals (backticks) for string interpolation
console.log(combined); // Hi, John!

const getName = new String('Tiwari');//String constructor
console.log(getName);
console.log(typeof getName);//object
console.log(getName.length);//11
console.log(getName[0]);//T
console.log(getName[1]);//i
console.log(getName.__proto__);//{}object
console.log(getName.toLowerCase());//tiwari....but isne hamari original value ko change nhi kiya hai
//because String object non-primitive hai aur ye heap mi store hoti hai...jiska bas refrence change hota hai 
//value same rahti hai

/*Some string methods:

***length: Returns the length of a string.
***toUpperCase(): Converts string to uppercase.
***toLowerCase(): Converts string to lowercase.
***includes(): Checks if a string contains another string.*/

let text = "JavaScript is fun";
console.log(text.length);        // 17
console.log(text.toUpperCase()); // "JAVASCRIPT IS FUN"
console.log(text.includes("fun")); // true
console.log(text.includes("abc")); // false
console.log(text.charAt(4));     // S
console.log(text.indexOf("n")); // 16
const newString=text.substring(0,4);//0 se 3 index tak ka value ayega
console.log(newString);//Java

const anotherString=text.slice(0,4)//slice mi negative value v de sakte hai
console.log(anotherString);

let str = "JavaScript";

// Using negative start index
console.log(str.slice(-5)); // "cript" (starts from 5th last character)

// Using negative start and end index
console.log(str.slice(-5, -1)); // "crip" (from 5th last to 2nd last)


//****************trim and replace method****************

const str2 = " hello world ";

console.log(str2);
console.log(str2.trim()); // "hello world".....trim works on white spaces
console.log(str2.trimStart()); // "hello world  "
console.log(str2.trimEnd()); // "  hello world"

const url ="https://ujjwal.com/hitesh%20kumar";
console.log(url.replace('%20','-'));//https://ujjwal.com/hitesh-kumar
console.log(url.includes('ujjwal'));

console.log(str2.split(" "));//["", "hello", "world", ""]

