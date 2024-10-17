//*************OPERATORS0*****************/

// 1. Arithmetic operators
// 2. Assignment operators
// 3. Comparison operators
// 4. Logical operators
// 5. Ternary operators
// 6. Bitwise operators
// 7. Special operators


// Arithmetic Operators:

console.log(2 + 3);   // Addition
console.log(2 - 3);   // Subtraction
console.log(2 * 3);   // Multiplication
console.log(2 / 3);   // Division
console.log(2 % 3);   // Modulus (Remainder)
console.log(2 ** 3);  // Exponentiation

// Increment and Decrement
let a = 2;
console.log(a++);     // Increment -> 2 (returns old value)
console.log(a--);     // Decrement -> 3 (returns old value)

// Assignment Operators:
let b = 2;
b += 3;               // Addition assignment
console.log(b);       // 5
b -= 3;               // Subtraction assignment
console.log(b);       // 2
b *= 3;               // Multiplication assignment
console.log(b);       // 6
b /= 3;               // Division assignment
console.log(b);       // 2
b %= 3;               // Modulus assignment
console.log(b);       // 2
b **= 3;              // Exponentiation assignment
console.log(b);       // 8

// Comparison Operators:
console.log(2 == 3);  // Equal -> false
console.log(2 != 3);  // Not equal -> true
console.log(2 === 3); // Strict equal -> false
console.log(2 !== 3); // Strict not equal -> true
console.log(2 > 3);   // Greater than -> false
console.log(2 < 3);   // Less than -> true
console.log(2 >= 3);  // Greater than or equal to -> false
console.log(2 <= 3);  // Less than or equal to -> true

// Logical Operators:
let x = 2;
let y = 3;
let z = 4;

console.log(x && y);        // Logical AND -> 3 (all are truthy)
console.log(x || y);        // Logical OR -> 2 (first truthy value)
console.log(x && y && z);   // Logical AND -> 4 (last truthy value)
console.log(x || y || z);   // Logical OR -> 2 (first truthy value)
console.log(x || (y && z)); // Logical AND & OR -> 2 (due to OR precedence)
console.log(!(x || y && z));// Logical NOT -> false

// Ternary Operator:
console.log(x > y ? "yes" : "no"); // Ternary -> "no" (since x is not greater than y)

// Bitwise Operators:
console.log(2 & 3);  // Bitwise AND -> 2 (010 & 011 = 010)
console.log(2 | 3);  // Bitwise OR -> 3 (010 | 011 = 011)
console.log(2 ^ 3);  // Bitwise XOR -> 1 (010 ^ 011 = 001)
console.log(~2);     // Bitwise NOT -> -3 (~010 = 101 in two's complement)
console.log(2 << 3); // Bitwise left shift -> 16 (2 * 2^3)
console.log(2 >> 3); // Bitwise right shift -> 0 (2 / 2^3)
console.log(2 >>> 3);// Bitwise unsigned right shift -> 0 (positive numbers same as >>)

// Nullish Coalescing Operator:
let nullableValue = null;
console.log(nullableValue ?? 'default'); // 'default' (if nullableValue is null/undefined)

let anotherValue = 0;
console.log(anotherValue ?? 'default');  // 0 (since it's not null/undefined)


/******************Interivew Questions*********************/

// 1.Implicit Type Conversion (Concatenation):

// Explanation: When one operand is a string, + converts the other to a string and concatenates.
console.log(2 + "3"); // "23"
console.log("2" + 3); // "23"
console.log(2 + "Hello"); // "2Hello"
console.log("Hello" + 2); // "Hello2"

// 2. Subtraction with Strings:

//Explanation: - operator converts strings to numbers 
// (if possible) and performs subtraction. If not, it returns NaN.
console.log("5" - 2);  // 3
console.log(5 - "2");  // 3
console.log("5" - "2");  // 3
console.log("Hello" - 2);  // NaN


//3.Comparison with == vs ===:
//Explanation: == allows type coercion,(ye type convert krke check karega equal hai ya nhi)
// while === checks both value and type without coercion.(isme exactly equal diya rahega to he true return karega )
console.log(2 == "2");  // true
console.log(2 === "2");  // false
console.log(0 == false);  // true
console.log(0 === false);  // false



//4.null and undefined:
//Explanation: null and undefined are loosely equal (==), 
//but strictly not equal (===). 
//Arithmetic operations with undefined return NaN.
console.log(null == undefined);  // true
console.log(null === undefined);  // false
console.log(null + 5);  // 5
console.log(undefined + 5);  // NaN


//5.Boolean Coercion:
//Explanation: Values like 0, "", null, undefined, and NaN are falsy, 
//while most others (including non-empty strings and empty arrays) are truthy.
console.log(Boolean(0));  // false
console.log(Boolean(""));  // false
console.log(Boolean("0"));  // true
console.log(Boolean([]));  // true
console.log(Boolean(null));  // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));  // false

//6. Division and Modulus with Strings:
//Explanation: "/" and "%" try to convert strings to numbers for arithmetic,
// but if conversion fails (like with "ten"), it results in NaN.
console.log("10" / 2);  // 5
console.log("10" % 3);  // 1
console.log("10" / "2");  // 5
console.log("ten" / 2);  // NaN


//7.Increment/Decrement on Strings:
//Explanation: Unary operators ++ and -- 
//attempt to convert strings to numbers before incrementing or decrementing.
let num1= "5";
console.log(++num1);  // 6
let nmu2= "5";
console.log(nmu2++);  // 5
console.log(nmu2);    // 6
