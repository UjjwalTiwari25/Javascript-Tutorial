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

// Increment and Decrement Operators:
// Increment and Decrement cannot be used directly on numbers (they are used with variables).
let a = 2;
console.log(a++);     // Increment
console.log(a--);     // Decrement

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
console.log(2 === 3); // Strict equal (checks type and value) -> false
console.log(2 !== 3); // Strict not equal -> true
console.log(2 > 3);   // Greater than -> false
console.log(2 < 3);   // Less than -> true
console.log(2 >= 3);  // Greater than or equal to -> false
console.log(2 <= 3);  // Less than or equal to -> true

// Logical Operators:
console.log(2 && 3);  // Logical AND -> 3 (returns last truthy value)
console.log(2 || 3);  // Logical OR -> 2 (returns first truthy value)
console.log(2 && 3 && 4); // Logical AND -> 4 (all are truthy, so returns last)
console.log(2 || 3 || 4); // Logical OR -> 2 (returns first truthy value)
console.log(2 || 3 && 4); // Logical AND and OR combined -> 2 (first truthy value due to precedence)
console.log(!(2 || 3 && 4)); // Logical NOT -> false (negating a truthy result)

// Ternary Operator:
console.log(2 > 3 ? "yes" : "no"); // Ternary -> "no" (since 2 is not greater than 3)

// Bitwise Operators:
console.log(2 & 3);  // Bitwise AND -> 2 (010 & 011 = 010 -> 2)
console.log(2 | 3);  // Bitwise OR -> 3 (010 | 011 = 011 -> 3)
console.log(2 ^ 3);  // Bitwise XOR -> 1 (010 ^ 011 = 001 -> 1)
console.log(~2);     // Bitwise NOT -> -3 (~010 = 101 in two's complement)
console.log(2 << 3); // Bitwise left shift -> 16 (2 * 2^3 = 16)
console.log(2 >> 3); // Bitwise right shift -> 0 (2 / 2^3 = 0)
console.log(2 >>> 3); // Bitwise unsigned right shift -> 0 (same as >> for positive numbers)

// Special Operators:
console.log(2 ?? 3); // Nullish Coalescing Operator -> 2 (2 is not null or undefined, so returns 2)
console.log(2 ?? 3 ?? 4); // Nullish Coalescing Operator -> 2 (2 is not null or undefined, so returns 2)

