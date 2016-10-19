/*Fix the syntax and/or style issues with the following functions:*/
function isHot(temperature) {
  if (temperature > 90) {
    return "It's hot!";
  } else {
    return "It's not hot!";
  }
}


function oldEnoughTo (age) {
  if (age >= 16){
  return "Drive a car"; 
  }
  if else (age >= 17); {
  return "Vote";
  }
  if else (age => 21) {
  return "Drink";
  }
  else {
  return "Do all the things!";
  }
}

/*Write a function sayHello that takes a language parameter, and returns "hello" in that language.
Make the function work with at least three languages.*/

function sayHello (lang){
  if (lang === "english"){
    return "hello";
  }
  else if (lang === "Hindi"){
    return "Namste";
  }
  else{
    return "default";
  }
    
}
sayHello("english");

/*Write a function validCredentials that accepts two parameters: username and password, and returns
true if both are long enough, and false otherwise. You can decide what constitutes "long enough".*/
function validCredentials (username, password) {
  if (username.length && password.length > 8) {
    return "Long enough!";
  }
  else {
    return "Not long enough!";
  }
}

function sum (n) {
  if (n===1){
    return 1;
  }
  else if  (n===0){
    return 0;
  }
    return n*sum(n-1);
}

sum(3);
/*Question:Repeating a String n Times: Let's write a function called 
repeatString that takes two parameters: a string str, which is the
 string to be repeated, and count -- a number representing how many 
 times the string str should be repeated*/

function repeatString (str, count) {
  if (count === 0){
    return "";
  }
  return str + repeatString(str, count-1);
}
repeatString("dog", 3);
  
/* Question: Compute the nth Fibonacci Number: The fibonacci 
numbers are represented by the following sequence:
*/
function fib (n) {
  if (n===0) {
    return 1;
  }
  else if (n===1) {
    return 1;
  }
    return fib(n-1)+fib(n-2);
  }
fib(5);
/* Question: Modify your sum function from the Basic Requirements section
 to accept two parameters, start and end: sum should now compute the sum 
 of the numbers from start to end. */

function sum (start, end) {
  if (start > end) {
    var temp = start;
    start = end;
    end = temp;
  }
  else if (end===start){
    return start;
  }
    return start+sum(start,end-1);
}

sum(9,3);

/* Question: Write a function product that works like sum, 
except it should compute the product of the numbers from start to end.
*/
function product (start, end) {
  if (start > end) {
    var temp = start;
    start = end;
    end = temp;
  }
  else if (end===start){
    return start;
  }
    return start *product(start,end-1);
}

product(9,3);

/* Question: Your task is to write a function called add that
 takes two numbers as parameters, x and y, and adds them together.
  The catch is that you can only use inc and dec to accomplish this.
*/

function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

function add(x, y){
  if (y === 0){
    return x;
  }
  return add(inc(x),  dec(y));
}
  add (3,4);

/*Qestion: Write a function called isEven that, given a number n as
 a parameter, returns true if that number is even, and false otherwise;
however, you need to do this without using the % operator.*/

function isEven(n){
  if (n === 0){
    return "Even";
  }
  else if (n< 0){
    return "odd";
  }
    return isEven(n-2);
}
  
  
isEven(15);

/*Question : Write a function called multiply that accepts two
 numbers as parameters, and multiplies them together -- but 
 without using the * operator; instead, you'll need to use repeated addition.
 */
function multiply(x,y){
  if (x===1){
    return y;
  }
  else if (x===0){
    return 0;
  }
    return y+multiply(x-1,y);
  }

multiply(5,3);

/* question1: Your task is to write a function called stringLength 
that accepts a string as a parameter and computes the length of that 
string; however, as you may have guessed, you are not allowed to use 
the length property of the string!*/

function stringLength(n){
  if (n===""){
    return 0;
  }
    return 1+stringLength(n.slice(1));
  }
stringLength("Hello");

/*Qestion 2: Write a function called modulo that works like the % operator,
 but without using it.
 */

function modulo(x,y){
  if ( y=== 0){
    return "NaN";
  }
  else if (y===1){
    return 0;
  }
  else if (y> x){
    return x;
  }
   return modulo(x-y, y);
}
modulo(4,5);

/*Qestion 3: Write a function called countChars that accepts two parameters:
 a string and a character. This function should return a number representing 
 the number of times that the character appears in string. 
*/

function countChars(string,char) {
  if (string===""){
    return 0;
  }
  else if (string[0] === char) {
    return 1 + countChars(string.slice(1), char);
  }
  return countChars(string.slice(1), char);
}
countChars("hello","l");

/* Question 4:  Implement a function called indexOf that accepts two paramters: a string and a character,
 and returns the first index of character in the string. You'll need to  make use of the techniques for
  accessing the first element of a string and the rest of the string (slice) as before.*/


function indexOf(string,char) {
  if (string===""){
    return 0;
  }
  else if(string.length ===1){
    return 0;
  }
  else if (string[0] === char) {
    return 0;
  }
    
  return 1+ indexOf(string.slice(1), char);
}
indexOf("Welcome Mahima","a");

/* Question 5: The power function in the lecture works, but can be made considerably faster through a method known as successive
 squaring.
 To get an idea of how this works, observe that:

$${2^4 = (2^2)^2}$$ $${2^7 = 2(2^3)^2}$$ $${2^8 = (2^4)^2}$$

Modify the power function to take advantage of this technique.
*/
function power(base, expo) {
  if (expo === 0){
    return 1;
  }
  else if(expo%2 === 0){
    return  power(base *base, Math.floor(expo/2))
  }
  
return base*power(base, expo-1);
}

power(2,7);