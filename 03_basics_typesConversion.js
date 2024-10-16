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



