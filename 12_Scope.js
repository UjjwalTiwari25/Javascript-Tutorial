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
//Working of nested scope
function one() {
    const username = "Ujjwal";
    function two() {
        const website = "CodeWithUjjwal.com";
        console.log(username);
        
    }
    console.log(website);
}
one();