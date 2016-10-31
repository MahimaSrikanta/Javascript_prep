function each(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function square(x){
  return x*=x;
}

function cube(x) { 
  return x**3;
}
var x = 3; // => undefined
x = 5; // => 5

var numbers=[1,2,3,4]

function sumSquares(numbers) {
  var total = 0;
  each (numbers,function(x) {
    total += square(x);
  });
  return total;
}


function sumCubes(numbers) {
  var total = 0;
  each (numbers, function(num) {				    
	total += cube(num);												
  });
  return total;
}

function product(arr) {
  var product = 1;
  for (var i  = 0; i < arr.length; i++) {
    product *= (arr[i]);
  }
  return product;
}


function productEach(arr) {
  var product = 1;
  each (arr, function(num) {
    product *= num;
  });
  return product;
}




function cubeAll(arr){
  var cubed=[];
  for(var i=0; i< arr.length;i++){
    cubed[i]= cube(arr[i]);
  }
  return cubed;
}

function cubeEach(arr){
  var cubed=[];
  each(arr,function(arrayElement){
    cubed.push(cube(arrayElement));
  });
  return cubed;
}

function odds(arr){
	var oddArray = [];
  each (arr, function(num) {
		if ((num % 2) != 0) {
      oddArray.push(num)
        };
    });
    return oddArray;
	}

function oddsFor(arr){
  var oddArray = [];
  for (var i = 0; i < arr.length; i++) {
   if (arr[i] % 2 != 0) {
     oddArray.push(arr[i])
   };
  }
  return oddArray
}

function sumByAllElementsMultipliedByFour(arr){
  var total=0;
  each(arr,function(num){
    total += num*4;
  });
  return total;
}
sumByAllElementsMultipliedByFour([1,2,3])

//2
var numbers = [1, 2, 3, 4];
function sumBy(arr,func){
  var total=0;
  each(arr, function(num){
    total+=func(num);
  });
  return total;
}
sumBy(numbers,square)


//3
function sumBy(arr){
  var total=0;
  each(arr, function(num){
    total+=num;
  });
  return total;
}
sumBy(numbers);

//4
function productBy(arr){
  var total =1;
  each(arr, function(num){
    total *=num;
  });
  return total
}
productBy(numbers);

function productBy(arr,func){
  var total =1;
  each(arr, function(num){
    total *=func(num);
  });
  return total
}
productBy(numbers,square);


// Refactoring ??

//Advanced
//1

function doubleAll(arr){
  var newArray=[];
  each(arr,function(num){
    newArray.push(num+num);
  });
  return newArray;
}
doubleAll([1, 3, 10, 4, 7]);

var numbers=[1, 3, 10, 4, 7]
var doubleAll=numbers.map(function(x){return x*2;});
doubleAll;

//2
function halveAll(arr){
  var newArray=[];
  each(arr,function(num){
    newArray.push(num/2);
  });
  return newArray;
}
var numbers=[1, 3, 10, 4, 7]
var halveAll= numbers.map(function(x){return x*0.5});
halveAll;
  
//3
function uppercaseAll(arr){
  var newArray=[];
  each(arr,function(string){
    newArray.push(string.toUpperCase());
  });
  return newArray;
}
uppercaseAll(["hi","hello","mahi"])
var strings=["hi","hello","mahi"];
var uppercaseAll= strings.map(function(x){return x.toUpperCase()});
uppercaseAll;

//4
 function map(arr,func){
   var newArray=[];
   each(arr,function(num){
     newArray.push(func(num));
   });
   return newArray;
 }
map([1, 2, 3, 4], function(x) { return x * 2;});

//5
map(["hello", "world"], function(x){ return x.toUpperCase() });
map(["HelLo", "WorLD"], function(x){ return x.toLowerCase() });
map(["the", "quick", "brown", "fox", "jumped"],function(x){ return x.length });
var people = [
  {name: "Alyssa P. Hacker", age: 26},
  {name: "Ben Bitdiddle", age: 34},
  {name: "Eva Lu Ator", age: 19},
  {name: "Lem E. Tweakit", age: 40}
];
map(people,function(x){ return x.name });
map(people, function(x){ return x.name + " is " + x.age});

//Finding patterns:filtering
//1

var numbers =[1,2,3,4,5,6,7]
var evens = numbers.filter(function(x){ return x%2 ===0});
evens

//2
var multiplesOfThree = numbers.filter(function(x){ return x%3 ===0 });
multiplesOfThree  

function multiplesOfThree(arr){
  var newArray=[];
  each(arr, function(num){
    if(num%3 ===0){
      newArray.push(num);
    }
  });
  return newArray;
}
multiplesOfThree([1,2,3,6,8,12]);

//3
numbers=[1,2,-4,6,0,-3]
var positive = numbers.filter(function(x){ return x>=0});
positive


function positive(arr){
  var newArray=[];
  each(arr, function(num){
    if(num >=0){
      newArray.push(num);
    }
  });
  return newArray;
}
positive(numbers);

//4
var sentence =["hello", "hi", "Mahima"]
var evenLength = sentence.filter(function(word){ return word.length %2 ===0});
evenLength

//5
function filter(array, f) {
  var newArray =[];
  each(array,function(num){
    if(f(num)){
      newArray.push(num);
    }
  });
  return newArray;
}

filter([1, 2, 3, 4], function(x) {
  return x % 2 === 0;
});

//6
//odd
filter([1, 2, 3, 4], function(x) { return x % 2 != 0;});

//Positives
filter([-1,0,-9,4],function(x){ return x>=0 });

//negatives
filter([-1,0,-9,4],function(x){ return x<0 });

//evenlength
filter(["hi","hello","Mahima"],function(x){ return x.length %2 ===0 });


//largerThanSix
filter([1,4,6,10,11],function(x){ return x>6 });


//7
var words = "the quick brown fox jumps over the lazy dog".split(" ");
function startsWithChar(strings, character) {
  // ...
  return filter(strings, function(word){
    return word[0] === character
  });
     
}

startsWithChar(words, "q");
