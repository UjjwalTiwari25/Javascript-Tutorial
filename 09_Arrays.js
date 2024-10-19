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


//******************Arrays Part 2******************


const bat_heros = ["batman", "superman", "wonderwoman"];
const ball_heros=["Rohit Sharma", "Sachin Tendulkar", "Virat Kohli"];
bat_heros.push(ball_heros);
console.log(bat_heros);
//another way to add two array
const all_heros = bat_heros.concat(ball_heros);
console.log(all_heros);

//another method
const all_new_heros=[...bat_heros,...ball_heros];
console.log(all_new_heros);
//*********************************** */
const anotherArray =[1,2,3,[4,5,[6,7]],[2,4]];

const usableArray = anotherArray.flat(Infinity);
console.log(usableArray);
/* Output:[
    1, 2, 3, 4, 5,
    6, 7, 2, 4
  ]
    */
   
console.log(Array.isArray(anotherArray));//checking whether given value is array or not
console.log(Array.isArray("UJJWAL"));//false...its string
console.log(Array.from("UJJWAL"));//[ 'U', 'J', 'J', 'W', 'A', 'L' ]...CONVERTED STRING TO ARRAY

console.log(Array.from({name:"UJJWAL"}));//[]..empty array because we have not mention that..key ko array mi convert karna hai ya value ko


let kohli_score = 183
let rohit_score = 264
let dhoni_score = 183

console.log(Array.of(kohli_score,rohit_score,dhoni_score));//[ 183, 264, 183 ]
