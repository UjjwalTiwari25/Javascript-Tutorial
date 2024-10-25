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