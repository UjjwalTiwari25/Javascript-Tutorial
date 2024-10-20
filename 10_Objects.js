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

  const tinderuser= new Object()//it create a singlton object
  const tinderUser2={}//it also create an empty object but  it is a non singleton object
  console.log(tinderuser);//empty object

  tinderUser2.id=1;
  tinderUser2.name="Ujjwal";
  tinderUser2.age=22;
  console.log(tinderUser2);//{id: 1, name: "Ujjwal", age: 22}


  //*******************************************************************************************
  //creating object under an object
  const regularObject = {
    email: "ujjwal@123.com",

    details: {
         fullname :{
            first: "Ujjwal",
            last: "Tiwari"},
         age: 22,
         city: "Mumbai"
      },
    isLoogedin: true
  };
  console.log(regularObject.details.fullname);//{first: "Ujjwal", last: "Tiwari"}

  //combining objects
  const obj1={
    name:"Ujjwal",
    age:22}

  const obj2={
    email:"ujjwal@123.com",
    city:"Mumbai"}
  
  const obj3={obj1,obj2}
  console.log(obj3);
  /* Output
  {
  obj1: { name: 'Ujjwal', age: 22 },
  obj2: { email: 'ujjwal@123.com', city: 'Mumbai' }
}
  ........we are facing same issue as we faced during array..that object is created inside object

  */
  const obj4 = Object.assign({},obj1,obj2)//{}..is target object
 console.log(obj1); 
 //Output:{ name: 'Ujjwal', age: 22, email: 'ujjwal@123.com', city: 'Mumbai' }
 

 //anotherway of combining objects
 const obj5 = {...obj1,...obj2}
 console.log(obj5);

 //accessing objects inside an array
 const arr = [
    {
      name1: "Ujjwal",
      age1: 22
    },
    {
      name2: "Ujjwal",
      age2: 22
    }
  ];
  console.log(arr[1].name1);//Ujjwal


  //accessing keys and value seperately of an object
  console.log(Object.keys(tinderUser2));//[ 'id', 'name', 'age' ]....its datatype is array
  console.log(Object.values(tinderUser2));//[ 1, 'Ujjwal', 22 ]


  //All other important methods of an array
  console.log(Object.entries(tinderUser2));//[ [ 'id', 1 ], [ 'name', 'Ujjwal' ], [ 'age', 22 ] ]


  // *******************************************************************************************************************************
  //Constructor function
  //You can create multiple objects of the same type using a constructor function. A constructor function initializes the properties of an object.
  function Person(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    /**
     * Prints a greeting message with the person's name.
     * Example:
     * person1.greet() // "Hi, I'm Ujjwal"
     */
    this.greet = function() {
      console.log("Hi, I'm " + this.name);
    };
  }
  
  let user1 = new Person("Ujjwal", 25, "ujjwal@123.com");
  let user2 = new Person("Kohli", 34, "kohli@xyz.com");
  
  user1.greet();  // Output: Hi, I'm Ujjwal
  user2.greet();  // Output: Hi, I'm Kohli
  

  //*******************************************************************
  //Prototype
  /*JavaScript uses prototypes to inherit properties and methods from one object to another.

Every object in JavaScript has a prototype. Methods and properties that are common to all
 objects can be added to the prototype
 so that all objects of that type inherit them. */


