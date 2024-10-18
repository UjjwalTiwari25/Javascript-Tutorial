const score=400;
const bonus=50;
const total=score+bonus;
console.log(total)
console.log(typeof score);//number..Js by default score ko number liya hai..but hm manually v mention kr sakte hai

const balance = new Number(100);
console.log(balance);//[Number: 100]
console.log(balance.toString());//"100"
console.log(typeof balance);//object
console.log(balance.toString().length);
console.log(balance.toFixed(2));

/*Properties:
Number.MAX_VALUE: Largest positive number in JavaScript.
Number.MIN_VALUE: Smallest positive number in JavaScript.
Number.POSITIVE_INFINITY: Represents positive infinity.
Number.NEGATIVE_INFINITY: Represents negative infinity.
Number.NaN: Represents a "Not-a-Number" value.


Methods:
Number.isFinite(value): Checks if the value is a finite number.
Number.isInteger(value): Checks if the value is an integer.
Number.isNaN(value): Checks if the value is NaN (Not-a-Number).
Number.isSafeInteger(value): Checks if the value is a safe integer (within the range of safe numbers in JavaScript).
Number.parseFloat(string): Parses a string and returns a floating-point number.
Number.parseInt(string, radix): Parses a string and returns an integer.


Number Object Methods:
toFixed(digits): Returns a string, rounding the number to a specified number of decimal places.
toExponential(digits): Returns a string with the number in exponential notation.
toPrecision(digits): Returns a string with a number to a specified precision.
toString(radix): Converts a number to a string in a specified base (e.g., binary, octal, hexadecimal).*/


//**********************Mathematics in Javascript**********************
console.log(Math);
console.log(Math.PI);//3.141592653589793

console.log(Math.abs(-10));//10...absolute value
console.log(Math.ceil(10.1));//11
console.log(Math.floor(10.9));//10  
console.log(Math.round(10.5));//11
console.log(Math.round(10.4));//10  
console.log(Math.sqrt(16));//4
console.log(Math.pow(2,3));//8
console.log(Math.min(1,2,3,4,5));//1
console.log(Math.max(1,2,3,4,5));//5
console.log(Math.random());//0.0...1.0
console.log(Math.trunc(10.9));//10

console.log(Math.floor(Math.random()*10)+1);


const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
/*Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
Multiply that by (max - min + 1) to scale it to the range you want (including both min and max).
Math.floor() rounds down the result to ensure it’s an integer.
Finally, adding min shifts the range, so the random number is between min and max (inclusive).*/


