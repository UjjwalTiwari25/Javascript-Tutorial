//first way of declearing array

const myHeros = ["spiderman", "thor", "hulk", "ironman"];
console.log(myHeros[0]);
console.log(myHeros[1]);
console.log(myHeros[2]);
console.log(myHeros[3]);
console.log(myHeros[4]);

//second way of declearing array
const myHeros1 = new Array("spiderman", "thor", "hulk", "ironman");
console.log(myHeros1[0]);
console.log(myHeros1[1]);
console.log(myHeros1[2]);
console.log(myHeros1[3]);
console.log(myHeros1[4]);

//Methods of array
myHeros.push("captain america");
myHeros.unshift("black panther");
myHeros.pop();
myHeros.shift();
myHeros.splice(1, 0, "black widow");
myHeros.slice(2, 4);
myHeros.reverse();
myHeros.filter((hero) => hero !== "black widow");
myHeros.map((hero) => hero + " is my hero");
console.log(myHeros);

//example of slice and aplice
const myArr =[0,1,2,3,4,5];
console.log("A",myArr);
const myArr1 = myArr.slice(1,3);
console.log(myArr1);
console.log("B",myArr);
const myArr2 = myArr.splice(1,3);
console.log(myArr2);
console.log("C",myArr);


//Iterating over Arrays

//1.forEach()
// Executes a provided function once for each array element.
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));
// Output:
// 1
// 2
// 3

//2.map()
// map() returns a new array by applying a function to each element. 
// It’s commonly used when you need a new transformed array.
let numbers1 = [1, 2, 3];
let doubled = numbers1.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6]

//3. filter()
//it returns a new array with elements that pass a test.
let numbers3 = [1, 2, 3, 4];
let greaterThanTwo = numbers3.filter(num => num > 2);
console.log(greaterThanTwo);  // Output: [3, 4]




