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

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
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
//using break and continue



