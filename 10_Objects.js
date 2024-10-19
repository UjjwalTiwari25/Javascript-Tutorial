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
    age:21,
    email:"ujjwal@123.com",
    isLoggedIn:true,
    isAdmin:false,
    lastLoginDays :["Monday","Tuesday","Wednesday"]
  }

  //ways to access properties of object
  console.log(newUser.email);//dot notation
  console.log(newUser["email"]);//bracket notation..Bracket notation is useful 
  //when property names have spaces or special characters, or if the property name is dynamically assigned
  