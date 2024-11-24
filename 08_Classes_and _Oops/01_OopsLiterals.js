const user = {
    username:"Ujjwal",
    loginCount: 8,
    signedIn: true,

    getUserStatus: function(){
        console.log(`Username is ${this.username} and user has logged in ${this.loginCount} times`);
    }
}

console.log(user.username);
console.log(user.getUserStatus());
