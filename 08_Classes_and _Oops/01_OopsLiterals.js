const user = {     //yehi object literals hai
    username:"Ujjwal",
    loginCount: 8,
    signedIn: true,

    /**
     * Prints a message showing user's status.
     * 
     * The message shows the user's username and the number of times the user has logged in.
     * 
     * Example:
     * getUserStatus() // "Username is Ujjwal and user has logged in 8 times"
     */
    getUserStatus: function(){
        // console.log(`Username is ${this.username} and user has logged in ${this.loginCount} times`);
            //console.log('Got user details from database')
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserStatus());
console.log(this);

 
