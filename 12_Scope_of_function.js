// let a= 10
// const b= 20
// var c= 30

// console.log(a)
// console.log(b)
// console.log(c)

//yeha tak koi dikkat nhi tha 

// {
//     scope ka concept yehi se ata hai
// }

let a= 102  //iska global scope hai
 if (true){
    let a= 10
    const b= 20
    var c= 30
    console.log("inside if",a)

}
console.log(a)//.....ye thik hai
// console.log(b)...ye thik hai
console.log(c) //dikkat isme ata hai..ye var block k bahar v accssible hota hai


//****for loop scope********************** */
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }//isme i block scope k andar he hai


//***************************************************Scope level and mini hoisting in js******** */
//Closure ki wajah se hum inner functions ke through outer variables ko access kar sakte hain,
//  even after outer function execute ho gaya ho.

function one() {
    const username = "Ujjwal"; // Parent function ka variable

    function two() {
        const website = "CodeWithUjjwal.com"; // Inner function ka variable
        console.log(username); // Yahan hum 'username' ko access kar sakte hain kyunki 'two' function ke paas closure ka access hota hai
    }

    // console.log(website); // Ye error dega kyunki 'website' sirf 'two' function ke andar accessible hai
    // two(); // Agar ye uncomment karoge toh 'two' function chalega
}

one();

/*Closure
 ka matlab hai ki inner function (two) apne parent function (one) ke variables ko access kar sakta hai, jaise username.
 Jab two function call hota hai, toh username ko access karne mein koi problem nahi hoti, kyunki JavaScript closure ko maintain karta hai.

Scope:

username ka scope poore one function ke andar hai, isliye two function ke andar bhi usse access kiya ja sakta hai.
Lekin website ka scope sirf two function ke andar hai, isliye one ke andar usse access nahi kiya ja sakta,
 isiliye error aata hai jab aap console.log(website) ko uncomment karte ho.
*/

if (true) {
    const username = "Ujjwal"; // Parent function ka variable

    if (username === "Ujjwal") {
        const website = "CodeWithUjjwal.com"; // Inner function ka variable
        console.log(username + website); // Yahan hum 'username' ko access kar sakte hain kyunki 'two' function ke paas closure ka access hota hai
    }
    // console.log(website);

}
// console.log(username);


//+++++++++++++++++++++++++++++++++++++++++++++Intersting fact++++++++++++++++

function addOne(num) {     //function definition
    return num + 1;
}
addOne(5);  //yeha value sirf return hua hai ..kuchh print nhi hua hai


const addOne2 = function (num) {    //function expression
    return num + 1;
}
addOne2(5);

//
