const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log("User Details:");
        console.log(`Username: ${this.username}`); // Access object properties using 'this'
        // console.log(this); // Logs the object itself
    },
};

// Accessing the object properties and method
console.log(user.username); // Output: hitesh
user.getUserDetails(); // Calls the method and logs user details


//constructor
function User(username, loginCount, isLoggedIn) {
    // Define properties
    this.username = username; // Property 1
    this.loginCount = loginCount; // Property 2
    this.isLoggedIn = isLoggedIn; // Property 3

    // Define a method
    this.greeting = function () {
        console.log(`Welcome ${this.username}`); // Access properties using 'this'
    };
}

// Creating instances of the User constructor
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// Accessing the constructor and methods
console.log(userOne.constructor); // Logs the constructor function
console.log(userTwo); // Logs the userTwo object
userOne.greeting(); // Output: Welcome hitesh
userTwo.greeting(); // Output: Welcome ChaiAurCode
