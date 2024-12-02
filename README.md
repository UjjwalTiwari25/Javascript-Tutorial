# **JavaScript Quick Revision 🚀**

### **🌟 What I’ve Learned So Far in JavaScript**

---

## **1️⃣ Basics of JavaScript 💡**
- **Variables**: `let`, `const`, `var`
  - Example: `const name = "Hitesh";`
- **Data Types**: String, Number, Boolean, Object, Array, Null, Undefined, Symbol
- **Operators**: `+`, `-`, `*`, `/`, `===`, `!==`, `&&`, `||`, `++`, `--`

---

## **2️⃣ Control Flow 🌉**
- **Conditionals**: `if`, `else`, `else if`, `switch`
- **Loops**: `for`, `while`, `do-while`, `for...of`, `for...in`

---

## **3️⃣ Functions 📜**
- **Function Declaration**: `function greet() { ... }`
- **Function Expression**: `const greet = function() { ... };`
- **Arrow Functions**: `const greet = () => { ... };`
- **Default Parameters**: `function greet(name = "Guest") { ... }`
- **Higher-Order Functions**: Passing functions as arguments (e.g., `map`, `filter`, `reduce`)

---

## **4️⃣ Objects & Prototypes 🛠️**
- **Object Literals**:
  ```javascript
  const user = {
      name: "Hitesh",
      age: 25,
      greet: function() {
          console.log("Hello!");
      },
  };
  ```
- **Constructors**:
  ```javascript
  function User(name, age) {
      this.name = name;
      this.age = age;
  }
  ```
- **Prototype Inheritance**:
  ```javascript
  User.prototype.sayHi = function() {
      console.log(`Hi, I am ${this.name}`);
  };
  ```

---

## **5️⃣ The `this` Keyword 🎯**
- Depends on the **context** (e.g., global, object, function, arrow function)
- In `call()`, `apply()`, `bind()`, we explicitly set `this`.

---

## **6️⃣ Arrays 🎉**
- **Common Methods**:
  - `push()`, `pop()`, `shift()`, `unshift()`
  - `slice()`, `splice()`
  - **Iterators**: `forEach()`, `map()`, `filter()`, `reduce()`
  - **Find & Search**: `find()`, `findIndex()`, `indexOf()`

---

## **7️⃣ Promises & Async Programming 🌐**
- **Promises**:
  ```javascript
  const promise = new Promise((resolve, reject) => {
      resolve("Success!");
  });
  ```
- **Chaining**: `.then()`, `.catch()`
- **Async/Await**:
  ```javascript
  async function fetchData() {
      const data = await fetch(url);
      return data.json();
  }
  ```

---

## **8️⃣ DOM Manipulation 🌳**
- **Selecting Elements**: `document.querySelector()`, `getElementById()`
- **Modifying Elements**: `.innerHTML`, `.style`, `.classList`
- **Events**: `addEventListener()`, Event Delegation

---

## **9️⃣ ES6+ Features 🌈**
- **Template Literals**: `` `Hello, ${name}!` ``
- **Destructuring**:
  ```javascript
  const { name, age } = user;
  const [first, second] = array;
  ```
- **Spread & Rest**: `...`
  ```javascript
  const combined = [...arr1, ...arr2];
  ```
- **Modules**: `import`, `export`
- **Default Parameters**: `function greet(name = "Guest") { ... }`

---

## **🔟 Error Handling ⚠️**
- **Try-Catch Block**:
  ```javascript
  try {
      riskyCode();
  } catch (error) {
      console.error(error);
  }
  ```

---

## **1️⃣1️⃣ Miscellaneous Tips 🎯**
- **Closures**: Functions that remember their lexical scope.
  ```javascript
  function outer() {
      let counter = 0;
      return function inner() {
          counter++;
          console.log(counter);
      };
  }
  ```
- **Event Loop**: Understanding how JavaScript handles asynchronous tasks using the Call Stack, Web APIs, and Event Queue.
- **Hoisting**: Variable and function declarations are moved to the top of the scope.

---

## **🌟 Next Steps**
- Master advanced concepts like **Modules**, **Web APIs**, and **Design Patterns**. 🚀

---

### **💪 Keep Learning and Coding! 💻**

--- 
