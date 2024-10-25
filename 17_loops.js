/*  Iteration:

In JavaScript, iteration refers to the process of repeatedly executing a block of code.
 This is commonly done with loops or iteration methods provided by arrays.

  */
 /*1. For Loop
 for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
 }
    */
 for (let i = 0; i < 5; i++) {
    const element = i;
    console.log(i); // Output: 0, 1, 2, 3, 4
}

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i==7){
        console.log("Thala for a reason")
    }
    console.log(i); 
}

//example of nested loop

for (let i = 0; i < 5; i++) {
    console.log(`outer loop = ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`outer looop = ${i}, inner loop = ${j}`);
    }
}

//table of 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(`Table of  = ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
}



//pyramid pattern of height 5
let rows = 5;  // Number of rows

for (let i = 1; i <= rows; i++) {
  // Print leading spaces
  let spaces = " ".repeat(rows - i);

  // Print stars
  let stars = "*".repeat(2 * i - 1);

  console.log(spaces + stars);
}


//************************************Breaking Loop******************* */
//using break
for (let index = 1; index <=20; index++) {
    if(index==7){
        break;  //jaise he index ka value 7 ho rha ...hm line no.68 k scope k bahar 
                // jump kr ja rhe aur kuchh uske aage execute nhi ho rha
    }
    console.log(`Value of i is ${index}`); //1,2,3,4,5,6...iske aage nhi print nhi hoga
  
}

//using continue
for (let index = 1; index <=20; index++) {
    if(index==7){
        continue;   //isem jaise he index ka value 7 hoga ..to 7 ko hm skip kr denge bakki 8 se fir continue kr denge
    }
    console.log(`Value of i is ${index}`); 
  
}



//************************************While loop*********************** */
let i = 0;
while (i <=10) {
  console.log(`Value of index is ${i}`);
  i=i+2;
}


let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = 0;
while (arr < myArray.length) {
  console.log(myArray[arr]);
  arr=arr+1;
}

//***************************************do-while loop*********************** */
//pahle kaam hoga fir condition check hoga

let score =1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

//kya hoga agar score ka value ..let score=11 hota?
let score1 =11;
do {
  console.log(`Score is ${score1}`);
  score1++;
} while (score1 <= 10); //isme 11 print hoga pahle fir baki ka condition check hoga


//***************************************************For of loop********************** */
//It is array specific loop
//putting objects inside an array
//[" " ," " , " "]
//[{},{},{}]

const arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of arrr) {
  console.log(num); 
}

//another example
const greetings = ["Good Morning", "Good Afternoon", "Good Evening"];
for (const greet of greetings) {
  console.log(`Hello Virat ${greet}`);

}

//

//********************************************************Maps in js************************** */
/*In JavaScript, Map is a built-in object that holds key-value pairs, 
where both keys and values can be of any data type (including objects, functions, etc.).
 Unlike regular JavaScript objects, 
Map maintains the order of its elements based on insertion, and keys can be of any data type.
  koi duplicate value nhi hota hai isme

//Creating a Map
const map = new Map();

//You can also initialize a Map with values:
const map = new Map([
  ["name", "Ujjwal"],
  ["age", 21]
]);


//Basic Map Operations

//Adding Elements:        Use .set(key, value) to add key-value pairs.
map.set("city", "Delhi");


//Accessing Elements:     Use .get(key) to retrieve the value for a specific key.
console.log(map.get("name"));  // Output: Ujjwal


//Checking Key Existence:    Use .has(key) to check if a key exists.
console.log(map.has("age"));  // Output: true


//Deleting Elements:    Use .delete(key) to remove a specific key-value pair.
map.delete("age");


//Size of Map:    Use .size to get the number of key-value pairs.
console.log(map.size);  // Output: 2


//Clearing All Entries:    Use .clear() to remove all key-value pairs.
map.clear();

*/
const map = new Map()
map.set("name", "Ujjwal")
map.set("age", 21)
map.set("city", "Delhi")
console.log(map)

//********************Iterating Over a Map***************************** */
//Using for...of:
// To get both keys and values:
// for (const key of map) {
//   console.log(key);
// }....aise array k form mi ayega keys and value both

//is tarah se bas hm map pr he iterate kr sakte hai ..bojects pr nhi kar sakte hai


for (const [key, value] of map) {
  console.log(key,":-" , value);
}


