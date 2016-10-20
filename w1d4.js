//Warmup 14
/*Question 2: Complete the function sumOfSquares that computes the sum of all the numbers from 0 to n,
but where each number is squared.*/

function sumOfSquares(n) {
  if (n===0) {
    return 0;
  }
  return n*n + sumOfSquares(n-1);
}//


/*Question2: Write a function called sumEvens that works like the other summation functions that you've written,
but only sums the even numbers between 0 and n. */                      
                    
 function sumEvens(n){
   if (n===0){
     return 0;
   }
   else if(n%2 ===0){
     return n+sumEven(n-2);
   }
   return sumEven((n-1));
 }


// ++++++++++   Variables ++++++++++++++++++++
//Basic Requirements
/* Quetsion2: Perform the following in the console:*/

firstName ="Mahima";
lastname = "Srikanta";
console.log(firstName + lastname);


//Question3:
var x = 5;
x + 10;
x; // =>15

var x = 17;
x = (x + 1) / 2;
x * 4;
x; // => 36

var x = 5;
var y = 20;
x = y;
y = y + 7;
x; // => 20


var x = 10;
var y = 5;
x = (x * 4) - 3;
x + 17;
x = x + y;
x; // => 42

/* Question4 : Write a function called counter that, when invoked, always returns
a number that is one more than the previous invocation. For instance:*/

var index=0;
function counter() {
  // TODO: your code here
  index++;
  return index;
}

counter(); // => 1
counter(); // => 2
counter();

//MorePractice
//Question1:(a),(b),(c) :Modify guessMyNumber so that if the guess is incorrect, guessMyNumber 

function guessMyNumber(n) {
    var upperbound =6;
    var rightNumber=randInt(upperbound);

  if (n > upperbound) {
    return "Out of bounds! Please try a number between 0 and 5.";
  }
 
  else if (n === rightNumber) {
    return "You guessed my number!";
  }
  return "Nope! That wasn't it!" + "correct number:  " + rightNumber ;
}

function randInt(n) {
  return Math.floor(Math.random() * (n + 1))
}

guessMyNumber(5);

/* Question2:At present, the guessing game picks a new random number every time it is "played" (invoked).
Now that you know how to make information persistent between function invocations, 
change the guessing game so that it picks a random number once and allows you to guess until you get the correct answer. */

var upperbound =6;
var rightNumber=randInt(upperbound);

function guessMyNumber(n) {
    console.log(rightNumber,n);
    
  if (n > upperbound) {
    return false;
  }
 
  else if (n === rightNumber) {
  console.log("You guessed my number !");
    return true;
  }
  console.log("Nope! That wasn't it!");
  return false;
}

function randInt(n) {
  return Math.floor(Math.random() * (n + 1))
}

function guessing(){
	console.log(rightNumber);
    var guessedNumber=0;
    var value = false;
    while(!value){
    guessedNumber = prompt("enter: ");
    value= guessMyNumber(parseInt(guessedNumber));
    
}
    
    return;
}
guessing();

/* question 3: It would be really cool if, after the answer was guessed, 
the message included the number of guesses it had taken to find the answer; 
for example, "You guessed my number in 3 guesses." */

var upperbound =6;
var rightNumber=randInt(upperbound);

function guessMyNumber(n) {
    console.log(rightNumber,n);
    
  if (n > upperbound) {
    return false;
  }
 
  else if (n === rightNumber) {
  
    return true;
  }
  console.log("Nope! That wasn't it!");
  return false;
}

function randInt(n) {
  return Math.floor(Math.random() * (n + 1))
}

function guessing(){
	console.log(rightNumber);
    var guessedNumber=0;
    var value = false;
    var count =0;
    while(!value){
    count ++;
    guessedNumber = prompt("enter: ");
    value= guessMyNumber(parseInt(guessedNumber));
    
}
    console.log("You guessed my number in " + count + " guess");
    return;
}
guessing();

/* Tangent problem: What happens if you get the number right on the first try? 
Does it say, "You guessed my number in 1 guesses."? If so, perhaps the wording 
should be different? Some better ideas are: */

var upperbound =6;
var rightNumber=randInt(upperbound);

function guessMyNumber(n) {
    console.log(rightNumber,n);
    
  if (n > upperbound) {
    return false;
  }
 
  else if (n === rightNumber) {
  
    return true;
  }
  console.log("Nope! That wasn't it!");
  return false;
}

function randInt(n) {
  return Math.floor(Math.random() * (n + 1))
}

function guessing(){
	console.log(rightNumber);
    var guessedNumber=0;
    var value = false;
    var count =0;
    while(!value){
    count ++;
    guessedNumber = prompt("enter: ");
    value= guessMyNumber(parseInt(guessedNumber));
    
}
if(count ===1){
		console.log("Congratulations! You guessed my number on the first try!");
    }
    else{
    console.log("You guessed my number in " + count + " guess");
    }
    return;
}
guessing();

/* question 4: Implement a way to limit the number of guesses that can be made so 
that a player loses after exceeding the limit.*/

var upperbound =6;
var rightNumber=randInt(upperbound);

function guessMyNumber(n) {
    console.log(rightNumber,n);
    
  if (n > upperbound) {
    return false;
  }
 
  else if (n === rightNumber) {
  
    return true;
  }
  console.log("Nope! That wasn't it!");
  return false;
}

function randInt(n) {
  return Math.floor(Math.random() * (n + 1))
}

function guessing(){
	console.log(rightNumber);
    var guessedNumber=0;
    var value = false;
    var count =0;
    var limit = 3;
    while(limit>0){
    count ++;
    guessedNumber = prompt("enter: ");
    value= guessMyNumber(parseInt(guessedNumber));
    limit--;
    
}
    if(count ===1 && value){
		console.log("Congratulations! You guessed my number on the first try!");
    }
    else if(value) {
    console.log("You guessed my number in " + count + " guess");
    }

    return;
}
guessing();

/* question 5 : Keep track of a high score (the lowest number of guesses) between games, and,
when the correct number has been guessed in a record number of times, include in the message
something that indicates that a new high score has been set*/

var upperbound =6;
var rightNumber=randInt(upperbound);

function guessMyNumber(n) {
    console.log(rightNumber,n);
    
  if (n > upperbound) {
    return false;
  }
 
  else if (n === rightNumber) {
  
    return true;
  }
  console.log("Nope! That wasn't it!");
  return false;
}

function randInt(n) {
  return Math.floor(Math.random() * (n + 1))
}

function guessing(){
	console.log(rightNumber);
    var guessedNumber=0;
    var value = false;
    var count =0;
    var limit = 3;
    while(limit>0){
    count ++;
    guessedNumber = prompt("enter: ");
    value= guessMyNumber(parseInt(guessedNumber));
    limit--;
    
}
    if(count ===1 && value){
		console.log("Congratulations! You guessed my number on the first try!");
    }
    else if(value) {
    console.log("You guessed my number in " + count + " guess");
    }

    return;
}
guessing();

//Advanced
/* question : Your task is to write a function that implements the above algorithm 
to play the game on your behalf. The first thing that you will need to do is create
another version of guessMyNumber that returns output that will be easier for another 
function to work with, e.g. use 1 for too high, -1 for too low, 0 for correct.*/

var upperbound =10;
var lowerbound =0;
var rightNumber=randInt(upperbound);

function guessMyNumber() {
    console.log(rightNumber);
  var numberGuessed = (upperbound + lowerbound)/2;
  
 var count =0;
   
if (numberGuessed > upperbound) {
    return false;
  }
  
  while(numberGuessed!= rightNumber){
  count ++;
 		if(numberGuessed > rightNumber){
 			console.log(" Your guessed number  " + numberGuessed + " is larger");
 			upperbound =numberGuessed;
 			numberGuessed = Math.floor ( (upperbound + lowerbound)/2);
 		}
   else if(numberGuessed < rightNumber){
 			console.log(" Your guessed number  " + numberGuessed + " is smaller");
      lowerbound =numberGuessed;
      numberGuessed =Math.round((upperbound + lowerbound)/2);
    }
  }
	console.log(" You guessed it right in " + count + " guesses");
	return;
	}

function randInt(n) {
  return Math.floor(Math.random() * (n + 1))
}

guessMyNumber();


// ++++++++++++++++++ while ++++++++++++++++++++++++++

/* question 1: Summation to n: Let's implement the function sum that takes a single parameter n,
and computes the sum of all integers up to n starting from 0 */

function sum(n) {
  // TODO: your code here
  var result=0;
  while(n>=0){
  	result +=n;
    n--;
    }
    return result;
}
sum(4);

/* question 2: (3:00 - 3:03) Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1*/
function factorial(n) {
	var result =1;
  // TODO: your code here
  if( n ===0){
  return 0;
  }
  while(n>=1){
  	result*=n;
    n--;
    }
return result;
}
factorial(3);

/* question 3: (3:04 -3:07 ) Let's write a function called repeatString that takes two parameters: a string str,
which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.
function repeatString(str, count) {
  // TODO: your code here
  var result = "";
  while(count >0){
  	result +=str;
    count --;
    }
    return result;
  	
}
repeatString("dog",3);

// ********** More Practice ***************

/* question 1: (3:07- 3:11)Modify your sum function from the Basic Requirements section to accept two parameters,
start and end: sum should now compute the sum of the numbers from start to end */

function sum(start, end) {
  // TODO: your code here
  if( start > end){
  return "Invalid"
  }
  
  var result =0;
  while(end >= start){
  result += end;
  end --;
  }
  return result;
}

sum(2,7);

/* question 2: (3:13- 3:17) Your task is to write a function called add that takes two numbers as parameters,
x and y, and adds them together. The catch is that you can only use inc and dec to accomplish this.*/
function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

function add(x,y){

	while( y >0){
   x=inc(x);
   y = dec(y);
   }
   return x;
}
add(2,7);

/*question 3:(3:19 -3:23) Write a function called isEven that, given a number n as a parameter, returns true if that number is even, 
and false otherwise; however, you need to do this without using the % operator.*/

function iseven(n){
	while(n >=0){
		if(n === 0){
    	return "Even";
    }
      n=n-2;
   }
      return "odd";
}

iseven(4);
/*************question 4: (3:35 -3:39) Write a function called multiply that accepts two numbers as parameters, and multiplies them together --
but without using the * operator; instead, you'll need to use repeated addition*/
function multiply(n,m){
	var result =0;
	while(n >0){
 		result+=m;
 		n--;
 	}
 	return result;
 }
multiply(3,4);

/*******************advanced****************/
/* question 1: (3:41 -3:53) Compute the nth Fibonacci Number: The fibonacci numbers are represented by the following sequence:*/
function fib(n){
 var val =0;
 var a=0
 var b=1;
 var result =0;

 while(val<n){
 	result = a+b;
  a =b
  b=result;
  val++;
  }
  return result;
  }
fib(5); 
 
/* question 2: y now you should have worked with the length property of strings, e.g. "hello".length. Your task is to write a function 
called stringLength that accepts a string as a parameter and computes the length of that string; however, as you may have guessed,
you are not allowed to use the length property of the string! */

function stringLength(str){
var result =0;
while(str != ""){

  	result+=1;
    str= str.slice(1);
}
 
    return result;
    
    }
    
stringLength("hello");

/* question 3: (4:11 - 4:18) Write a function called countChars that accepts two parameters: a string and a character. This function should return a number
representing the number of times that the character appears in string. To access the first element of a string, you can use the following syntax:*/

function modulo (x,y){
if( x< y){
	return x;
  }
	while(x >=0){
  x= x-y;
  }
  return y+x;
	}
modulo(7,2);  
/* question4: (4:20 - 4:23) Write a function called countChars that accepts two parameters: a string and a character. This function should return a number representing the number of times that the character appears in string.
To access the first element of a string, you can use the following syntax: */
function countChars(str,char){
	var count =0
	while(str !=""){
  if(str[0] === char){
  	count++;
    }
    str = str.slice(1);
    }
    return count
    }
countChars("hello","l");

/* question5:(4:24 - 4:33) Implement a function called indexOf that accepts two paramters: a string and a character, and returns the first index of character in the string. You'll need to make use of the techniques 
for accessing the first element of a string and the rest of the string (slice) as before.*/
function indexOf(str, char){
	var index =0;
  var len = str.length;
  while(str[0] != char && str != ""){
  index+=1;
  str = str.slice(1);
  }
  if(index === len){
  return -1;
  }
  
  return index;
  }
indexOf("hello", "e")  
  

    
  




  
    
  	
 
 	
  	


  
