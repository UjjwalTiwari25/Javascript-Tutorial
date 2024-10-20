//*************3 ways to create objects****************

//1.using object literal
let person = {
    name: "Ujjwal",
    age: 25,
    email: "ujjwal@123.com"
  };
  console.log(person);  // Output: {name: "Ujjwal", age: 25, email: "ujjwal@123.com"}

  //2.using object constructor
  let person1 = new Object();
  person1.name = "Ujjwal";
  person1.age = 25;
  person1.email = "ujjwal@123.com";
  console.log(person1);  // Output: {name: "Ujjwal", age: 25, email: "ujjwal@123.com"}

  //3.using object.create
  let prototypeObj = {
    greet: function() {
      return "Hello!";
    }
  };
  
  let newObj = Object.create(prototypeObj);
  console.log(newObj.greet());  // Output: Hello!

  //another example of object literals

  const newUser={
    name:"Ujjwal",
    "full name": "Ujjwal Tiwari",
    age:21,
    email:"ujjwal@123.com",
    isLoggedIn:true,
    isAdmin:false,
    lastLoginDays :["Monday","Tuesday","Wednesday"]
  }

  //changing properties of object
  newUser.email="ujjwal@1234.com";

  //freezing object
  Object.freeze(newUser);
  //cross checking that whether object is frozen or not
  newUser.email="ujjwal@234.com";
  console.log("New email is " + newUser.email);

  // ******************************************************************************

  //ways to access properties of object
  console.log(newUser.email);//dot notation
  console.log(newUser["email"]);//bracket notation..Bracket notation is useful 
  //when property names have spaces or special characters, or if the property name is dynamically assigned
  //example👇
  console.log(newUser["full name"]);//Ujjwal Tiwari

 // create a symbol and use it in the key of object
const mySym = Symbol('Keys');

const newUser1={
    name:"Ujjwal",
    mySym:"myKeys1",
    "full name": "Ujjwal Tiwari",
    age:21,
    email:"ujjwal@123.com",
    isLoggedIn:true,
    isAdmin:false,
    lastLoginDays :["Monday","Tuesday","Wednesday"]
  }
  console.log( newUser1.mySym);
  console.log(typeof newUser1.mySym);//
  //Aise symbol ko object me store  nhi kar sakte hai...agar output de v deta hai to datatpe string dega

  //correct way
  const mySym1 = Symbol('Keys1');  // Symbol declaration

  const newUser2 = {
      name: "Ujjwal",
      [mySym1]: "myKeys1",  // Correct way to use symbol as a key
      "full name": "Ujjwal Tiwari",
      age: 21,
      email: "ujjwal@123.com",
      isLoggedIn: true,
      isAdmin: false,
      lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
  };
  
  console.log(newUser2[mySym1]);  // Outputs "myKeys1"
  console.log(typeof newUser2[mySym1]);  // Outputs "string"
  

  //Adding function in an object
    /**
     * Prints a greeting message with the person's name.
     * 
     * Example:
     * person3.greet() // "Hello Ujjwal"
     */
  let person3= {
    name: "Ujjwal",
    age: 22,
    greet: function() {
      console.log("Hello " + this.name);
    }
  }

  //Another example
  const anotherUser={
    name:"Ujjwal",
    "full name": "Ujjwal Tiwari",
    age:21,
    email:"ujjwal@123.com",
    isLoggedIn:true,
    isAdmin:false,
    lastLoginDays :["Monday","Tuesday","Wednesday"]
  }

  anotherUser.greet= function(){
    console.log("Hello Bhai");
  }
  console.log(anotherUser.greet);//annynomous function..function execute nhi hua hai sirf function ka reference aya hai
  console.log(anotherUser.greet());//Hello Bhai

  anotherUser.greet= function(){
    console.log(`Hello Bhai, ${this.name}`);
  }
  console.log(anotherUser.greet());//Hello Bhai, Ujjwal


  // ***************************************************************************************************

  const tinderuser= new Object()
  // tinderuser.name="Ujjwal"
  console.log(tinderuser.name);//Ujjwal