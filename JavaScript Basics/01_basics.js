const fullName = "John Doe";
// name= 25;  Error: doesnt allow reassignment

let age = 10;
age = 20;  // valid

let city = "Mumbai"; // 
city="Delhi";  // Valid, but not recommended.

let email;

console.log(fullName);// 
console.log(age);// 
console.log(city);//
console.table([fullName, age, city,email]);// [10, 15, 20] tabular form

 /*var age = 23;.....javascript mi ab hm var nhi use karte hai
 var sirf function ke andar scoped hota hai, iska matlab agar 
 aap var ko kisi loop ya block (if, for, while, etc.) ke andar declare karte ho,
  toh us block ke bahar bhi wo variable accessible hoga....
  if (true) {
  var x = 10;
}
console.log(x);  // Output: 10 (x is accessible outside the block)
Problem: Yaha x block ke bahar bhi accessible hai, jabki aapko lagta tha ki yeh sirf if block ke andar accessible hoga.*/


// accountCity="Mumbai";bina variable a aage likhe v uska memory reserve kr sakte hai ..but its not a good practice.


//*********************************************************************** */
