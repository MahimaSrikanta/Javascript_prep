//your code here!

//challanges

/*Question1: (1:49 PM -1:53 PM)Write a function called billTotal that can be used to calculate
 the total to be paid at a restaurant -- including tip and tax -- given the subtotal 
 (i.e. cost of food and drinks). We can assume that the tip will be 15% and tax will be 9.5%.
  Make sure that the tip does not include the tax!*/

function billTotal(cost){
	var tip = 0.15*cost;
	var tax = (0.095*(tip+cost));
	return (tax+cost+tip);
}
billTotal(100);

/*Question 2:(1:55 PM  -1:59 PM) Implement the function called animalNoise that accepts two parameters
: a type of animal and an emotion that indicates that animal's current emotional state. Based on the 
combination of animal and emotion, animalNoise should return an appropriate noise (represented as a string).
 The function should work with at least two different animals and emotions.*/

function animalNoise(animal, emotion){
	if(animal ==="cat" && emotion ==="angry"){
		return "MEOW"
	}
}
animalNoise("cat", "angry")


/*Question 3: (2:00 PM -2:07 PM) The digital sum of a number is the sum of all its digits, e.g. digitalSum(1337)
 should output 14: 1 + 3 + 3 + 7. Use any of the methods of reptition that we have covered so far to implement this function.*/

//Recurssion
function digitalSum(n) {
  // TODO: your code here
  if (n=== 0){
  	return 0;
  }
 return n %10 +(digitalSum(Math.floor(n/10)));
}

digitalSum(8);



//While loop
function digitalSum(n) {
  // TODO: your code here
  var sum =0;
  while(n >0){
  	sum+= n%10;
  	n=Math.floor(n/10);
  	
  }
  return sum;
}

digitalSum(147);

//your code here!
/***********Intro to Arrays **************************/

/* Question3:  Create arrays in the global scope of your main.js file consisting of strings that represent: */

var movies = ["Shrek", "Matrix", "Planet Earth"]
var Names = ["Mahima", "Ssrikanta", "Pushpa"]
var sports = ["soccer", "baseball", "basketball"]

//Accesing Array Elements

/*Question 1: Using the arrays that you created in the last exercise, use the console to access:*/

console.log(movies[0]);
console.log(movies[-1]);
console.log(movies[movies.length-1]);


/*question 2: Write a function first that takes an array as an argument and returns the first element in that array */

function first(array) {
	return array[0];
}

first([1,2,3]);

/* Question 3:Write a function last that takes an array as an argument and returns the last element in the array. */

function last(array) {
	return array[array.length-1];
}


function last1(array) {
	return array.slice(-1);
}

last([1,2,3]);
last1([1,2,3]);

//Modifying Arrays
/*Question 1: Using the console, push and unshift, make this array contain the numbers from zero through seven */
var arr = [2, 3, 4];

arr.push(5, 6, 7);
arr.unshift(0,1);

console.log(arr)

//Question 3:  Change all odd numbers to be those numbers multiplied by two:
var numbers = [4, 9, 7, 2, 1, 8];
// TODO: your code here

function even(array){
	var index = 0;
	while(index < array.length){
		if(array[index] % 2 !== 0){
			array[index] = array[index]*2;
		}
		index++;
	}
	return array;
}
even( [4, 9, 7, 2, 1, 8]);

//More Practice

/* Question 1: Write a function called nth that accepts an array and an index as parameter,
and returns the element at that index.*/

function nth(array, index) {
  return array[index]; 
}


var animals = ['dog', 'cat', 'gerbil'];
nth(animals, 2); // => 'gerbil'
nth(animals, 1) === animals[1]; // => true


// Question 3: Write a function butlast that returns all of the elements in the array except for the last one (you may want to use slice for this one as well).

var numbers = [3, 2, 7, 5]

function butlast(array) {
	return array.slice(0,array.length-1);
}

butlast(numbers)

/*Question 4: Complete the function cons that accepts an element and an array, and returns an array with the element added to the front of the array:*/

function cons(x, array) {
  // your code here
  array.unshift(x);
  return array;
}
cons(2,[1,4,5]);
/* question 5: Complete the function conj that accepts an array and an element, and returns an array with the element added to the end of the array:*/

function conj(array, x) {
  // your code here
  array.push(x);
  return array;
}
conj([1,2,3],4)

/********************* question 6: What benefit(s) might there be to using functions like cons or conj over unshift or push? ******/

/*Question 7:   */
 var arr = []; 
 arr[7] = "Hello." 
 arr; // => ???
//=> [ , , , , , , , 'Hello.' ]*/

//Advanced

/*Question 1: Without running the below function, use a whiteboard to figure out what it should return by repeatedly expanding function invocations:*/

function first(array){
	return array[0];
}

function rest(array){
	return(array.slice(1));
}

function cons(x, array) {
  // your code here
  array.unshift(x);
  return array;
}

function conj(array, x) {
  // your code here
  array.push(x);
  return array;
}

function mystery(array) {
  if (array.length === 0) {
    return [];
  }
  return conj(mystery(rest(array)), first(array));
}

mystery([1,2,3,4]);
//=> [ 4, 3, 2, 1 ] , It revrses the array recurssively

function sum(array){
	if(array.length ===0){
		return 0;
	}
	return first(array)+ sum(rest(array));
	}
sum([1,2,3]);

function squared(array){
	if(array.length ===0){
		return [];
	}
	return cons(first(array)*first(array),squared(rest(array)));
}

function even(array){
	if(array.length ===0){
		return [];
	}
	if(array[0]%2 ===0){
	  return cons(first(array),even(rest(array)));;
	}
	else{
	  return even(rest(array));
	}
	
	}
	
even([2,3,4,5,6]);

