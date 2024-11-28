---

# 🚀 JavaScript Quick Revision Guide

This repository contains a quick revision guide for all JavaScript concepts covered so far! Perfect for last-minute revision! 😎✨

---

## 📚 Topics Covered:

### 1. **Data Types**
- **Primitive**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`
- **Non-Primitive**: `object`, `array`, `function`

### 2. **Variables** 📝
- Declared using `var`, `let`, `const`
  - **var**: Function-scoped, can be re-declared
  - **let**: Block-scoped, can't be re-declared
  - **const**: Block-scoped, immutable values

### 3. **Control Flow** 🔄
- **Conditional Statements**: `if`, `else`, `else if`, `switch`
- **Loops**: `for`, `while`, `do-while`
- **Break & Continue**: Exit or skip loop iterations

### 4. **Functions** 🔧
- **Function Declaration**: Defined with `function` keyword
- **Function Expression**: Stored in a variable
- **Arrow Functions**: Shorter syntax, `this` keyword is lexical

```javascript
const add = (a, b) => a + b;
```

- **IIFE (Immediately Invoked Function Expression)**: Runs as soon as it’s defined
```javascript
(function() {
   console.log("IIFE ran!");
})();
```

### 5. **Scope** 🌐
- **Global Scope**: Accessible everywhere
- **Local Scope**: Accessible within function/block
- **Block Scope**: Variables declared with `let` and `const` are block-scoped

### 6. **Hoisting** ⬆️
- Variables and function declarations are moved to the top of their scope during the compile phase.

### 7. **Objects** 🧱
- Collection of key-value pairs, including `methods` (functions as values).
- **Symbols** can be used as unique object keys.
```javascript
const mySym = Symbol('key');
const obj = { [mySym]: 'value' };
```

### 8. **Arrays & Array Methods** 📊
- **Array Creation**: `const arr = [1, 2, 3];`
- **Common Methods**:
  - `push()`, `pop()`, `shift()`, `unshift()`
  - `map()`, `filter()`, `reduce()`, `forEach()`

### 9. **Dates** 📅
- **Create a Date**: `const now = new Date();`
- **Format Date**: Using `toLocaleString()`, `getFullYear()`, `setMonth()`, etc.

### 10. **Rest Parameter & Spread Operator** 📌
- **Rest Parameter**: Combines multiple arguments into a single array
```javascript
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```
- **Spread Operator**: Expands array elements or object properties
```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
```

### 11. **Control Flow & Execution** 🚦
- **Call Stack**: Functions are executed in a LIFO (Last In, First Out) order.
- **Event Loop**: Manages asynchronous code execution.

### 12. **`this` Keyword** 📍
- **In Objects**: Refers to the object calling the method.
- **In Arrow Functions**: Lexical `this`, i.e., inherits from its surrounding scope.

---

### Quick Code Snippets for Revision 🔥

```javascript
// Arrow Function
const greet = (name) => `Hello, ${name}!`;

// Function Hoisting
hoistedFunction();
function hoistedFunction() {
   console.log('This function is hoisted!');
}

// Array Methods Example
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);  // [2, 4, 6, 8]
```

---

## 🔥 Tips for Fast Debugging
- Use `console.log()` everywhere for debugging.
- Always use `let` and `const` to avoid accidental redeclaration.
- Remember, `this` behaves differently in arrow functions.

---

## 🌟 Happy Coding! ✨

---

