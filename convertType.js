let val;
//val = 5;
//number to string:
val = String(5);
console.log(val); //5
console.log(typeof val); //string
console.log(val.length); //1
//everything can be converted to String:
val = String(true);
val = String(new Date());
val = String([1, 2, 3]);

//toString():
val = (3).toString();
val = (true).toString();
console.log(val); //true
console.log(typeof val); //string
console.log(val.length); //4 length只对string可用

//string to number:
num = ('5');
num = Number('5');
console.log(num);
console.log(typeof num);
console.log(num.toFixed(2)); //5.00 toFixed()只对number可用

//boolean to number:
bol = Number(true);
console.log(bol); //1
bol = Number(false);
console.log(bol); //0
nul = Number(null);
console.log(nul); //0
val = Number('hello');
console.log(val); //NaN(not a number)
arr = Number([1, 2, 3]);
console.log(arr); //NaN(not a number)

//parseInt:
val = parseInt('100');
val = parseFloat('100.21');

//from 1 to 20 random number:
num1 = Math.floor(Math.random() * 20 + 1);
console.log(num1);

//string append: +=
val = 'Lily ';
val += 'Rose';

//escaping: \
val = 'That\'s mine and it\'s yours';

//concat():
firstName = 'Lily';
lastName = 'Rose';
val = firstName.concat(' ', lastName);

val = firstName[0]; //L

//indexOf()
val = firstName.indexOf('i'); //1
val = lastName.lastIndexOf('s'); //2 从右往左数

//charAt(): character at
val = firstName.charAt('2'); //l
//get the last 2nd character
val = lastName.charAt(lastName.length - 2); //s

//substring: pull a string out of a string:
val = firstName.substring(0, 3); //Lil

//slice(): pull an array out of an array, used for string too, 比substring更多的功能是可以倒数：
val = firstName.slice(-2); //ly

//split(): split a string into an array based on a seperator:
const str = 'Hello there this is Lily';
val = str.split(' '); // ["Hello", "there", "this", "is", "Lily"]

//replace():
val = str.replace('Lily', 'Lili');

//includes(): true or false based on something in the string
val = str.includes('He'); //true

console.log(val);