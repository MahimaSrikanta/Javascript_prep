/******************************* EJS ***************************************/
function isPrime(num){
  for(var i=2;i<=Math.sqrt(num); i++){
    if(num %i ===0){
      return false;
    }
  }
  return true;
}


isPrime(93)

//foreach 

function foreach(array, func){
  for(var i=0;i<array.length;i++){
    func(array[i]);
  }
}
foreach([1,2,3],console.log);

//

function greaterThan(n) {
  return function(m) { return m > n; };
}
greaterThan(10)(11);

//
function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}
noisy(Boolean)(0);

//Flatten a 2-D array
var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array){
  return array.reduce(function(arr,curr){
    return arr.concat(curr);
  });
}
flatten(arrays)

//check for repeated words



//Mother-child age difference

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
average([1,2,3])


  
  
//even numbers using filter

//Sol1
function evens(num){
  return num %2 ===0;
}

var a= [1,2,4,6,7];
a.filter(evens);
  
//Sol2

function evens1(array){
  return array.filter(function(num){
    return num %2===0;
  });
}
evens1(a);

//Sol3

function evens2(array,func){
  return array.filter(function(num){
    return func(num);
  });
}

evens2(a,evens)

//sol4

function evens3(array,func){
  return array.filter(func);
}

evens3(a,evens);

//To remove the consecutive repeating letters from a string

//Sol 1 
"aabbcc".split("").filter(function(value, index, array){ 
  return array.indexOf(value) === index;
}).join("");

// sol 2
function repeat(str){
 return str.split("").reduce(function(acc,curr){
  if(curr === acc.slice(-1)){
    return acc+"";
  }
  else{
    return acc+curr;
  }
},"");
}

repeat("aabbcc");

// map function

function map(array){
  var result=[];
  for(var i =0;i<array.length;i++){
    result.push(array[i]);
  }
  return result;
}

console.log(map([1,2,3]));

//


function mapp(array, func){
  var result=[];
  for(var i=0;i<array.length;i++){
    result.push(func(array[i]));
  }
  return result;
}

function test(num){
  return num %2 ===0;
}

mapp([1,2,3,4,8],test)

/*********************************mock interview ***********************/
var companies = [
  {
    "name" : "AdventNet",
    "category_code" : "enterprise",
    "number_of_employees" : 600,
    "founded_year" : 1996,
    "total_money_raised" : "$0"
  },
  {
    "name" : "TechnologyGuide",
    "category_code" : "web",
    "number_of_employees" : 10,
    "founded_year" : 2001,
    "total_money_raised" : "$0"
  },
  {
    "name" : "Wetpaint",
    "category_code" : "web",
    "number_of_employees" : 47,
    "founded_year" : 2005,
    "total_money_raised" : "$39.8M"
  },
  {
    "name" : "Zoho",
    "category_code" : "software",
    "number_of_employees" : 1600,
    "founded_year" : 2005,
    "total_money_raised" : "$0"
  },
  {
    "name" : "Omnidrive",
    "category_code" : "network_hosting",
    "number_of_employees" : null,
    "founded_year" : 2005,
    "total_money_raised" : "$800k"
  },
  {
    "name" : "Digg",
    "category_code" : "news",
    "number_of_employees" : 60,
    "founded_year" : 2004,
    "total_money_raised" : "$45M"
  },
  {
    "name" : "Geni",
    "category_code" : "web",
    "number_of_employees" : 18,
    "founded_year" : 2006,
    "total_money_raised" : "$16.5M"
  },
  {
    "name" : "StumbleUpon",
    "category_code" : "web",
    "number_of_employees" : null,
    "founded_year" : 2002,
    "total_money_raised" : "$18.5M"
  }
];
// Given an array of companies, return an array of all the company names founded last century
function companes(array){
  return array.filter(function(comp){
    return ((comp.founded_year >= 1900) && (comp.founded_year <2000));
  }).map(function (country){
    return country.name;
  });
}

companes(companies);

// Given an array of companies, return an array of all the company names that raised 20 million dollars or more

function assert(exp,des){
  if(exp){
    console.log("test passed");
  }
  else{
    console.log(des);
  }
}

function million(companies){
  return companies.filter(function(company){ 
    return (company.total_money_raised.slice(-1) ==="M") && (Number.parseInt(company.total_money_raised.slice(1,-1)) >=20);
  }).map(function (item){
    return item.name;
  });
}

assert(JSON.stringify(million(companies))=== JSON.stringify([ 'Wetpaint', 'Digg' ]), "wrong result");


// Given an array of companies and a truth test function, return an array of company names that return true for the truth test

function test(comp){
  return ((comp.founded_year >= 1900) && (comp.founded_year <2000));
}

function truthtest(companies, func){
  return companies.filter(func).map(function(item){
    return item.name;
  });
  
}


assert(JSON.stringify(truthtest(companies, test)) === JSON.stringify(['AdventNet']), "wrong result");
truthtest(companies, test)

/********************************* EJS **************************************/
// Persons who were young in  year 1674

var ANCESTRY_FILE =  [
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  
  ];
  
  // names filter 
  console.log(ANCESTRY_FILE.filter(function(person){
    return person.name === "Carolus Haverbeke";
  }));
  
  // young in 1674 (filter)
  
  function filter1(array,func){
    var result=[];
    for(var i=0;i<array.length;i++){
      if(func(array[i])){
        result.push(array[i]);
      }
    }
    return result;
  }
  
  filter1(ANCESTRY_FILE,function(person){
    return (person.born > 1650) && (person.born < 1674);
  });
  

// mapping aling with filterring

function map(array,func){
  var result=[];
  for(var i=0;i<array.length;i++){
    result.push(func(array[i]));
  }
  return result;
}

 console.log(map( filter1(ANCESTRY_FILE,function(person){
    return (person.born > 1650) && (person.born < 1674);
  }),function(item){
    return item.name;
  }));
  
//reduce

function reduce(array,func4,curr){
  var acc =curr;
  for(var i=0;i<array.length;i++){
    acc= func4(acc,array[i]);
  }
  return acc;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
  return a + b;
}, 0));
  
//Reduce to most ancient know ancestor using inbuilt reduce function

//sol1
ANCESTRY_FILE.reduce(function(acc,curr){
  if(curr.born < acc.born){
    return curr;
  }
  else{
    return acc;
  }
});

//sol2

function earliest(acc,curr){
  if(curr.born <acc.born) return curr;
  else return acc;
}
ANCESTRY_FILE.reduce(earliest);



//composibility, find avg age of male and female.

//Sol1

function Average(array){
  function total (acc,curr){
   return acc +(curr.died - curr.born);
  }
  return array.reduce(total,0)/array.length;
}

function mtest(person){
  return person.sex ==="m";
}


function ftest(person){
  return person.sex ==="f";
}

Average(ANCESTRY_FILE.filter(mtest));
Average(ANCESTRY_FILE.filter(ftest));


//sol2 

function mtest(person){
  return person.sex ==="m";
}


function ftest(person){
  return person.sex ==="f";
}

function average(array){
  var result=array.filter(mtest);
 return  result.reduce(function (acc,curr,array){
    return acc+(curr.died - curr.born);
  },0)/result.length;
}

average(ANCESTRY_FILE);

// Great-great
var byName={};
ANCESTRY_FILE.forEach(function(person){
  byName[person.name]= person;
});

console.log(byName["Maria van Brussel"])
/********************************Studying individual HOFs***************************/

/**************ForEach function MDN *****************/
// 1
var a =[1,2,3];
a.forEach(function(value,index,array){
  console.log(value,index,array);
});

// 2
var a=[4,5,6];
function test(num){
  console.log(num);
}
a.forEach(test);

// doubt 3  ===> wrong as forEach does not return any value

var a =[7,8,9];
function test1(num){
  return num%2 ===0;
}

a.forEach(test1);

// 4  customized forEach function 
function Each(array,func){
  for(var i=0;i<array.length;i++){
    func(array[i]);
  }
}

Each([1,2,3],console.log);

function check(array){
  var total=0;
  Each(array,function(num){
    total+=num*2;
  });
  return total;
}

check([1,2,3]);

//5 function io example
function console() {
  var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
names.forEach(function(name){
  console.log(name);
});
}
console();
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }]
    }
  ];
  
// 7 Project an array of videos into an array of {id,title} pairs
function vid(array){
  var result=[];
  array.forEach(function(movie){
    result.push({"id": movie.id, "title": movie.title});
  });
  return result;
}
console.log(vid(newReleases));

/* 8 customized forEach function

function each(array,func){
  for(var i=0;i<array.length;i++){
    func(array[i]);
  }
}

function func(movie){
  var result=[];
  result.push({"id": movie.id, "title": movie.title});
  return result;
}

console.log(each(newReleases,func));  ===> this is wrong */ 

//9 
console.log("\n ************************ test 9 *************************\n");

function each(array,func){
  for(var i=0;i<array.length;i++){
    func(array[i]);
  }
}

function test9(array){
  var result=[];
  each(array,function(movie){
    result.push({"id": movie.id, "title": movie.title});
  });
  return result;
}

console.log(test9(newReleases));

/**************Map function MDN  (process array , return array)*****************/
//1 

var a =[1,2,3];
a.map(function(value,index,array){
  console.log(value,index,array);
})


//2 

function test(num){
  return num+1;
}
a.map(test);

//3 cutomized map

function map(array,func){
  var result=[];
  for(var i=0;i<array.length;i++){
    result.push(func(array[i]));
  }
  return result;
}

map([4,6],test);

//4 more examples
[1,2,3].map(Math.sqrt)

//5   doubt (when to use [] and . in object key ) also converting to this format
var kvArray = [{key:1, value:10}, 
               {key:2, value:20}, 
               {key:3, value: 30}];
               
function test1(array){
 
  return array.map(function(item){
     var result={};
    result[item.key] = item.value;
   return result;
  
  });
  
}
test1(kvArray);

//6  reverse a string using map  doubt : call

var a ="hello how are you";

Array.prototype.map.call(a, function(x) {
  return x;
}).reverse().join('');



//7  convert number string array to number array

['1','2'].map(Number);

//8 
var kvArray = [{key:1, value:10}, 
               {key:2, value:20}, 
               {key:3, value: 30}];
               
function test1(array){
 var result={};
  array.map(function(item){
     
    result[item.key] = item.value;
   return result;
  
  });
 
}
test1(kvArray);


//8.a using forEach
var kvArray = [{key:1, value:10}, 
               {key:2, value:20}, 
               {key:3, value: 30}];
               
function test1(array){
  var obj={};
  array.forEach(function(item){
    obj[item.key]= item.value;
  });
  return [obj];
}

test1(kvArray)

/********************************** functional programming **********************************/
//9
Array.prototype.map = function(projectionFunction) {
  var results = [];
  this.forEach(function(itemInArray) {

    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the projectionFunction to each item in the array and add
    // each result to the results array.
    // Note: you can add items to an array with the push() method.
    // ------------ INSERT CODE HERE! ----------------------------
    results.push(projectionFunction(itemInArray));

  });

  return results;
};

JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]';

// 10 

  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }]
    }
  ];

//Let's repeat the exercise of collecting {id, title} pairs for each video in the newReleases array, but this time we'll use our map function.

//============> compare it with solution 4

function test3(array){
 
  return array.map(function(movie){
    return {"id" :movie.id ,"title":movie.title};
  });
}

test3(newReleases);

//
var fruitsOfTheWorld = [
  ["apple", "pineapple", "pear"],
  ["manzana", "pera", "piña"],
  ["poma", "perera", "ananàs"]
];

function cap(s){
  
  return s.substring(0,1).toUpperCase() + s.slice(1).toLowerCase();
}
 
function test(array, func){
  return array.map(function(fruits){
    return fruits.map(cap);
      
    });
}
test(fruitsOfTheWorld,cap);


var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function(value,index){
  console.log(index+ " " +value )
})


/******************/

var kvArray = [{key:1, value:10}, 
               {key:2, value:20}, 
               {key:3, value: 30}];
               
function test1(array){
  var obj={};
  array.forEach(function(item){
    obj[item.key]= item.value;
  });
  return [obj];
}

test1(kvArray)

/********************/
var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
    }
  ];
  
//Use forEach() to loop through the videos in the newReleases array and, if a video has a rating of 5.0, add it to the videos array.

function test3(array){
  var result=[];
 array.forEach(function(movie){
    if(movie.rating === 5.0){
      result.push(movie);
    }
  });
  return result
}



test3(newReleases)



function filter1(array, func){
  var results=[];
  array.forEach(function(item){
    if(func(item)){
      results.push(item);
    }
  });
  return results;
}

filter1([1,2,3,4],function(num){
  return num >2;
});

"aabbcc".split("").filter(function(value, index,array){
  return array.indexOf(value) === index;
}).join("");

//Query Data by Chaining Method Calls
//Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0
 newReleases.filter(function(movie){
   return movie.rating === 5.0;
 }).map(function(item){
   return item.id
 });



Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------
    subArray.forEach(function(item){
      results.push(item);
    });
    
  });

  return results;
};
JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll());


/************************filter MDN **************************/

/* write filter for objects*/
function filter(obj,functest){
  var result={};
  for(var keys in obj){
    if(functest(obj[keys])){
      result[keys] = obj[keys];
    }
  }
  return result;
}


filter({"a":1,"b":2,"c":4},function(num){
  return num %2 ===0;
});
/********************** EJS *********************************/

/*Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.
*/

//sol1 
function loop(num){
 
  for(var i=1;i<=7;i++){
     var result="";
    for(var j=0;j<i;j++){
      result+="#";
    }
    console.log(result);
  }
}


loop(7);

//Sol2 
var row = "#"; 
while (row.length <= 7) {
  console.log(row);
  row = row + "#";
}

// 2.2 FizzBuzz
/* 
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.
*/

//sol1
for (var n = 1; n <= 25; n++) {
  var output = "";
  if (n % 3 === 0)
    output += "Fizz";
  if (n % 5=== 0)
    output += "Buzz";
  console.log(output || n);
}


// 2.3 Chess Board
/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
Passing this string to console.log should show something like this:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it 
works for any size, outputting a grid of the given width and height. 
*/

function check(num){
  var a="# # # # ";
  var b=" # # # #";
  for(var i=1;i<=num;i++){
    if(i%2 ===0){
      console.log(b);
    }
    else{
      console.log(a);
    }
  }
}

check(8);


/* Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.*/

function isEven(num){
  if(num ===0){
    return true;
  }
  else if (num ===1){
    return false;
  }
  else  {
    return isEven(num-2);
  }
}

isEven(5);

/*Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.*/

function countB(str){
  var regex= /[B]/g;
  return str.match(regex).length;
}
countB("BBCCBBDBS");


/*Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). */

function count(str, key){
  var counter=0;
  str.split("").forEach(function(alpha){
    if(alpha === key ){
      counter++;
    }
    
  });
  return counter;
}

count("BBCCBBDBS","C");

//Recurssion

function count3(str,key){
  if(str.length ===0){
    return 0;
  }
  else if( str[0] === key){
    return 1 + count3(str.slice(1),key);
  }
  else{
    return count3(str.slice(1),key);
  }
}

count3("BBCCBBDBS","B")

/* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.*/
function range(start,end,step){
  var result=[];
  for(var i=start;i<=end;i=i+step){
  result.push(i);
  }
  return result;
}

range(1,5,2);

/* The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method*/

function reverseArray(array){
  for(var i=0,j=array.length-1;i<=j;i++,j--){
    var temp = array[i];
    array[i] = array[j];
    array[j]=temp;
  }
  return array;
}

reverseArray([1,2,3,4]);

/****************************************Hackreactor free prep ****************************************/

//difference between obj[key] and obj.key
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
  
  // your code here
  if((customerData[firstName] !== undefined) &&(customerData[firstName].visits> 1)){
      greeting += "Welcome back, " + firstName + "! So glad to see you again!";
  }
  else if((customerData[firstName] !== undefined) &&(customerData[firstName].visits === 1)){
      greeting += "Welcome back, " + firstName + '! We\'re glad you liked us the first time!';
  }
  else{
      greeting +='Welcome! Is this your first time?';
  }
  
  return greeting;
}


//2 

var employees = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

function transformEmployeeData(array) {
  // your code here
  
  var result=[];
  
  array.forEach(function(persons){
      var obj={};
       persons.forEach(function(person){
          var key= person[0]
          obj[key]=person[1];
      });
      result.push(obj);
  });
  return result;
  
}
transformEmployeeData(employees)

function assert(exp, des){
  if(exp){
    console.log("test passed");
  }
  else{
    console.log(des);
  }
}

/*Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string.
*/

function countWords(sen){
  var obj={};
  sen.split(" ").forEach(function(word){
    if(obj[word] !== undefined){
      obj[word] = obj[word]+1;
    }
    else{
      obj[word]=1;
    }
  });
  return obj;
}

assert(JSON.stringify(countWords("ask a bunch get a bunch")) === JSON.stringify({ask: 1, a: 2, bunch: 2, get: 1}),"wrong count");


/* Write a function called "extend".

Given two objects, "extend" adds properties from the 2nd object to the 1st object.*/



//assert(JSON.stringify(extend("ask a bunch get a bunch")) === JSON.stringify({ask: 1, a: 2, bunch: 2, get: 1}),"wrong count");


function extend(obj1, obj2) {
  // your code here
  for(var keys in obj2){
      if(obj1[keys] !== undefined){
          obj1[keys] = obj2[keys];
      }
  }
  return obj1;
}

var obj1 = {
  
  
  
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};
extend(obj1,obj2)

//  Note usege of typeof to check if the object or not
function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
  if((obj[key] === undefined) || (typeof(obj[key])!== 'object')){
      return [];
  }
  return obj[key].filter(function(num){
      return num === 10;
  });
}

var obj = {
    key: 1
};

getElementsThatEqual10AtProperty(obj, 'key');

/* The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method*/

function reverseArray(array){
  for(var i=0,j=array.length-1;i<=j;i++,j--){
    var temp = array[i];
    array[i] = array[j];
    array[j]=temp;
  }
  return array;
}

reverseArray([1,2,3,4]);

/* write filter for objects*/
function filter(obj,functest){
  var result={};
  for(var keys in obj){
    if(functest(obj[keys])){
      result[keys] = obj[keys];
    }
  }
  return result;
}


filter({"a":1,"b":2,"c":4},function(num){
  return num %2 ===0;
});

/*sort the objects
*/

/* remove key value from objects*/

function removeNumbersLargerThan(num, obj) {
  // your code here
  var result={};
  for(var keys in obj){
      if((typeof(obj[keys])==='number') &&(obj[keys]>= num)){
            delete obj[keys]
        
      }
     
  }
  
  return obj
}
var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);


/*full name */

function addFullNameProperty(obj) {
  // your code here
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj;
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName);



/****************************************Hackreactor free prep ****************************************/

//difference between obj[key] and obj.key
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
  
  // your code here
  if((customerData[firstName] !== undefined) &&(customerData[firstName].visits> 1)){
      greeting += "Welcome back, " + firstName + "! So glad to see you again!";
  }
  else if((customerData[firstName] !== undefined) &&(customerData[firstName].visits === 1)){
      greeting += "Welcome back, " + firstName + '! We\'re glad you liked us the first time!';
  }
  else{
      greeting +='Welcome! Is this your first time?';
  }
  
  return greeting;
}


//2 

var employees = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

function transformEmployeeData(array) {
  // your code here
  
  var result=[];
  
  array.forEach(function(persons){
      var obj={};
       persons.forEach(function(person){
          var key= person[0]
          obj[key]=person[1];
      });
      result.push(obj);
  });
  return result;
  
}
transformEmployeeData(employees)

function assert(exp, des){
  if(exp){
    console.log("test passed");
  }
  else{
    console.log(des);
  }
}

/*Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string.
*/

function countWords(sen){
  var obj={};
  sen.split(" ").forEach(function(word){
    if(obj[word] !== undefined){
      obj[word] = obj[word]+1;
    }
    else{
      obj[word]=1;
    }
  });
  return obj;
}

assert(JSON.stringify(countWords("ask a bunch get a bunch")) === JSON.stringify({ask: 1, a: 2, bunch: 2, get: 1}),"wrong count");


/* Write a function called "extend".

Given two objects, "extend" adds properties from the 2nd object to the 1st object.*/



//assert(JSON.stringify(extend("ask a bunch get a bunch")) === JSON.stringify({ask: 1, a: 2, bunch: 2, get: 1}),"wrong count");


function extend(obj1, obj2) {
  // your code here
  for(var keys in obj2){
      if(obj1[keys] !== undefined){
          obj1[keys] = obj2[keys];
      }
  }
  return obj1;
}

var obj1 = {
  
  
  
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};
extend(obj1,obj2)

//  Note usege of typeof to check if the object or not
function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
  if((obj[key] === undefined) || (typeof(obj[key])!== 'object')){
      return [];
  }
  return obj[key].filter(function(num){
      return num === 10;
  });
}

var obj = {
    key: 1
};

getElementsThatEqual10AtProperty(obj, 'key');

/* The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method*/

function reverseArray(array){
  for(var i=0,j=array.length-1;i<=j;i++,j--){
    var temp = array[i];
    array[i] = array[j];
    array[j]=temp;
  }
  return array;
}

reverseArray([1,2,3,4]);

/* write filter for objects*/
function filter(obj,functest){
  var result={};
  for(var keys in obj){
    if(functest(obj[keys])){
      result[keys] = obj[keys];
    }
  }
  return result;
}


filter({"a":1,"b":2,"c":4},function(num){
  return num %2 ===0;
});

/*sort the objects
*/

/* remove key value from objects*/

function removeNumbersLargerThan(num, obj) {
  // your code here
  var result={};
  for(var keys in obj){
      if((typeof(obj[keys])==='number') &&(obj[keys]>= num)){
            delete obj[keys]
        
      }
     
  }
  
  return obj
}
var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);


/*full name */

function addFullNameProperty(obj) {
  // your code here
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj;
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName);

// Merge two objects;

function addObjectProperty(obj1, key, obj2) {
  // your code here
  obj1[key]= obj2;
  return obj1;
}

var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }


// remove double space
function convertDoubleSpaceToSingle(str) {
  // your code here
return str.split("  ").join(" ");
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);


//

function countCharacter(str, char) {
  // your code here
    var counter=0;
    for(var i=0;i<str.length;i++){
        if(str[i]===char){
            counter++;
        }
    }
    return counter;
}


// Regular expression with variable and global

function countCharacter(str,char){
  var re= new RegExp(char,"g");
  return str.match(re).length
}

var output = countCharacter('I am a hacker', 'a');
console.log(output);

//remove elements
function removeElement(array, discarder) {
  // your code here
  return array.filter(function(value){
      return value !== discarder;
  });
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);