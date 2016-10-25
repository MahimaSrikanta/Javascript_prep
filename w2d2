// Warm-up

// 1
// for loop


function sum(n) {
  var result = 0;
  while (n > 0) {
    result = result + n;
    n = n - 1;
  }return result;
}

sum(10);
//https://repl.it/languages/javascript


function power_iter(base, exponent) {
  var result = 1;
  var index = 0;
  while (index < exponent) {
    result = result * base;
    index = index + 1;
  }
  return result;
}

power_iter(2, 3)




//Basic Requirements
var Person = {
  firstName: "Josh",
  lastname: "Lehman",
};

var someName= {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

var someAnimal={
  animal: "dog",
  noise: "bark",
  age: 3,
  type: "Labrador",
  color: "Yellow",
};

//1
var you = {
  firstName : "Mahima",
  lastName : "Srikanta",
  age : 26,
  hometown : "Bangalore",
};

//2
var you = {
  firstName : "Mahima",
  lastName : "Srikanta",
  age : 26,
  hometown : "Bangalore",
  tvShows : ["Dexter", "Modern Family"],
  occupation : "student",
  dateOfBirth : "11-11-1990",
  pets : "Dog",
  
};

//3 //format question
var you = {
  name: {
  	first : "Mahima",
    middle : "D",
  	last : "Srikanta",
	},
  age : 26,
  hometown : "Bangalore",
  tvShows : ["Dexter", "Modern Family"],
  occupation : "student",
  dateOfBirth : "11-11-1990",
  pets : "Dog",
  
};

//1
var obj = {}; //Undefined
//2
obj.hello = "world";
obj["number"] = 25;
obj.age = 33;

//3
 { hello: 'world', number: 25, age: 33 }

//4
you["favoriteColor"] = "blue";


//1
var key = "name";
var person = {
    name: "Alyssa P. Hacker",
    age: 26,
    hometown: "somewhere"
};
person[age]; // => 26
person.key; // => "Alyssa P. Hacker"


///////////////////////////////////////
//1
var key = "name";
var person = {
    name: "Alyssa P. Hacker",
    age: 26,
    hometown: "somewhere"
};
person["age"]; // => 26
person.name; // => "Alyssa P. Hacker"



//2
var alyssa = {
  name: {
    first: "Alyssa",
    middle: "P.",
    last: "Hacker"
  },
  age: 26
};

function fullName(person) {
  return alyssa.name.first + " " + alyssa.name.middle + " " + alyssa.name.last;
}

fullName(alyssa); // => "Alyssa P. Hacker"




//3


////4
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

//4-1
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21},
  {name: {first: "heejin", last: "Ahn",}, age: 33},
];

// 4-2
function fullName(person){
  return person.name.first + " " + person.name.middle + " " + person.name.last;
  
}
fullName(people[5]);

//check if there s way to solve with var key in obj//////
//4-3
function arrays(answer){
  var result =0;
  for(var i=0; i< answer.length; i++){
    result = result+answer[i].age;
    
  }
  return result/answer.length;
}

arrays(people)

//4-4
function ages(person, age){
  var newArray = [];
  for(var i = 0; i < person.length; i++){
    if(person[i].age > age){
      newArray.push(person[i]);
    }
  }return newArray;
}

ages(people, 30)



//////Iterating over Keys & Values
//1.

var dirtyObject = {
  _fht: 192492,
  name: "Alyssa P. Hacker",
  age: 26,
  _byz: 939205,
  _ttrs: 510852
}




function clean(obj) {
	var newObj = {};
	
  for(var key in obj){
		 if(key[0] != "_"){
		 	newObj[key] = obj[key];
		 }
  }
  return newObj;
}
clean(dirtyObject)


/* question2 (1:12- : Write a function removeOddValues that takes an object as an argument and 
returns an object with all key/value pairs removed for which the value holds an odd number. 
You'll need to use the `typeof` operator to first check that the values are numbers:*/
function removeOddValues(obj){
  var newObj ={};
  for(var key in obj){
    if(typeof(obj[key]) ==='string' || typeof(obj[key]) === "number" && obj[key] % 2 ===0){
      newObj [key] = obj[key];
    }
  }
  return newObj;
}
 removeOddValues(dirtyObject);


function removeOddValues(obj){
  
  for(var key in obj){
    if(typeof(obj[key]) === "number" && obj[key] % 2 !==0){
      delete obj[key];
    }
  }
  return obj;
}
 removeOddValues(dirtyObject);

//More Practice
/* Quetsion2 : Write a function countWords that, when given a string as an argument, 
returns an object where keys are the words in the string, and values are the number of
occurrences of that word within the string:*/

function countWords(string){
  var array = string.split(" ");
  var newObj = {};
  for(var i =0; i < array.length; i++){
    console.log(array[i])
    if(newObj.hasOwnProperty(array[i]){
       newObj[array[i]] = newObj[array[i]] +1;
       
       }
       
    else{
       newObj[array[i]]= 1;
       }
   }
  return newObj;
 }
       

countWords("hello hello");
    
    
/* Question 4: Write a function select that accepts two arguments: 
an object and an array. The array should contain names of keys that will be selected from the object: */
function select(obj, keys){
  var newObj ={};
  for (var i=0; i < keys.length; i++){
    if(obj.hasOwnProperty(keys[i])){
      newObj[keys[i]] = obj[keys[i]];
    }
    else{
      return "invalid";
    }
  }
    return newObj;
  }
select({a: 1, b: 2, c: 3}, ["a"]);
    
    
/* Question 5:Write a function extends that accepts two objects as arguments, and extends all of 
the key/value pairs of the second one to the first one. */
    
function extend(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }
  return obj1;
}
extend({a: 1}, {b: 2}); // => {a: 1, b: 2}
extend({a: 1, c: 3}, {b: 2, c: 4}); // => {a: 1, b: 2, c: 4}
    
//Recusrion
        

    
//Advanced
    
/* Question 1: 
