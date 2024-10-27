const myLang = ["Java", "Python", "C++", "C"];
 const values = myLang.forEach((item)=>{
    console.log(item);
    return item;
})
console.log(values);//undefined
//for each koi v value return  nhi karta hai

//****************************************Filter********************* */
//ye values return karta hai

const myNum = [1, 2, 3, 4, 5];
 const newNums = myNum.filter((num)=>num>3);  //callback function
 console.log(newNums);//[4, 5]

 //isme to direct return kar rha ..lekin agar hm map function mi parenthesis lagate hai to explicit return karna hota hai
 //myNum.filter(()=>{return true})


 const myNum2 = [1, 2, 3, 4, 5];
 const newNums2 = myNum.filter((num)=>{return num<3});  //callback function
 console.log(newNums2);//[4, 5]

 //same kaam for each loop se karna ho to kaise karenge ?

 myNum2.forEach((num)=>{
    if(num<3){
        console.log(num);//output 1,2
    }
 })

 //example
 const books = [
    {title: 'book1', author: 'Virat',publish: 2010},
    {title: 'book2', author: 'Ujjwal',publish: 2015},
    {title: 'book3', author: 'Rohit',publish: 2018},
    {title: 'book4', author: 'Dhoni',publish: 2018},
    {title: 'book5', author: 'Sachin',publish: 2005},
    {title: 'book6', author: 'Virat',publish: 2020},
    {title: 'book7', author: 'Jadeja',publish: 2020},
    {title: 'book8', author: 'Rahul',publish: 2022},
    {title: 'book9', author: 'Pandya',publish: 2010},
    {title: 'book10', author: 'Yuvraj',publish: 2024},
  ]
//   const myBooks = books.filter((book)=>(book.publish>2010));
// const myBooks = books.filter((book)=>book.author=='Virat');
// const myBooks = books.filter((book)=>(book.publish>=2010 && book.author=='Virat'));
// const myBooks = books.filter((book)=>(book.publish>=2010 || book.author=='Virat'));

const myBooks = books.filter((book)=>(book.publish>2024 && book.author=='Virat'));  //Output: []
  console.log(myBooks)

  //**********************************Some more examples*************************** */
  const myNum3 = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];
   const myNewNums = myNum3.map((num)=>(num +10));
  console.log(myNewNums);

  //Output : [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]
    

//**********************************************************Chaining************* */
//myNum.map().filter()
//myNum.map().filter().map()
//myNum.map().filter().filter()
//myNum.map().map()

const myNum4 = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];

// const myNewNums2 = myNum4.map((num)=>(num +10)).filter((num)=>num>15);
const myNewNums2 = myNum4.map((num)=>(num +10)).filter((num)=>num>15).map((num)=>num*2);  //[ 32, 34, 36, 38, 40 ]
console.log(myNewNums2);


//********************************************************Reduce********************** */

const myNum5 = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];
const myTotal = myNum5.reduce(function(acc ,curVal){
    console.log(`acc: ${acc} curVal: ${curVal}`);
    return acc + curVal;
} , 0);  //here 0 is initial value
console.log(myTotal);

//****************************Now writing this in arrow function********************* */
//myNum5.reduce(()=>() , 0);

const myNum6 = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];
const myTotal2 = myNum6.reduce((acc ,curVal)=> acc + curVal, 0);  //here 0 is initial value
console.log(myTotal2);

//****************************Using this on a Object****************** */
const myShoppinCart =[{
    itemName1: "Js course",
    price : 1000,
},
{
    itemName2: "DS course",
    price : 12000,
},
{
    itemName3: "Java course",
    price : 10000,
}

]
 const myPriceToPay = myShoppinCart.reduce((acc ,item)=> acc + item.price ,0)
console.log(myPriceToPay);