/***********Memory Location************
Stack Memory:   for primitive data types*/


let myName = "Ujjwal";  // Primitive type (String) stored in stack
let yourNamne = myName; // Copies the value "Ujjwal" from myName to yourNamne

yourNamne = "Kohli";    // Now, you change the value of yourNamne to "Kohli"

console.log(myName);//Ujjwal
console.log(yourNamne);//Kohli

/*Dekho, jab tum `myName = "Ujjwal"` likhte ho, toh `"Ujjwal"` ek string hai 
jo stack memory mein store hoti hai.

Phir jab tum `yourNamne = myName` karte ho, toh `yourNamne` mein bhi `"Ujjwal"`
 ka ek naya copy store ho jata hai. Ab `myName` aur `yourNamne` dono alag alag 
 `"Ujjwal"` ko hold kar rahe hain, dono ke paas apni copy hai.

Jab tum `yourNamne = "Kohli"` likhte ho, toh sirf `yourNamne` change hota hai. 
`myName` pe koi farak nahi padta, kyunki dono ke paas apni apni value hai.

--------->>>myName remains "Ujjwal" because primitive values are copied by 
value in the stack.
yourNamne becomes "Kohli" after the change.

*/


//Heap Memory:    for non-primitive data types

let user1 = {
    name: "Ujjwal",
    email: "ujjwal@123",
    phone: "1234567890"
};
let user2 = user1;  // user2 is now referencing the same object in the heap
user2.name = "Kohli";  // Changing the "name" property of the object

console.log(user1.name);//Kohli
console.log(user2.name);//Kohli

/*Dekho, jab tum `user1` ko define karte ho, toh wo ek object hota hai, 
jo non-primitive type hai, isliye heap memory mein store hota hai. `user1` jo 
stack mein store hota hai,wo bas us object ka reference ya pointer hold karta hai, 
jo heap mein pada hai.

Ab jab tum `user2 = user1` likhte ho, toh `user2` ek naya object nahi banata, 
balki wahi reference copy karta hai jo `user1` ke paas hai. Matlab `user1` aur 
`user2` dono wahi same object ko point kar rahe hain heap memory mein.

Phir jab tum `user2.name = "Kohli"` karte ho, toh us object ka `name` property
 change hoti hai. Aur kyunki dono variables wahi same object point kar rahe hain, 
 ye change `user1` aur `user2` dono mein dikhai dega.*/


//------->>>When you modify user2.name, it also affects user1.name because they both 
//refer to the same object in the heap. Changing one affects the other since they share the same memory location.