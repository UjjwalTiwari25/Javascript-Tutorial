//IIFE(Immediately Invoked Function Expression)
// is a JavaScript function that runs immediately after it is defined. 
// The syntax involves wrapping the function inside parentheses to make it a function expression,
//  and then immediately invoking it using ().


(function chai (){    //named iife
    console.log("DB Connected");
})();   //yeha pr semmicolon ka jaruat hai



//using arrow function
(() => {   //unnamed iife
    console.log("DB Connected");
})();



//passing variable
((name) => {
    console.log(`My name is ${name}`);
})('ujjwal');