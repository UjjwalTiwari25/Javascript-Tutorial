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



