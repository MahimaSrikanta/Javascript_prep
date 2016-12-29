"Mahima" + "dosa"

function square(x){
  return x*x;
}
square(square(4));

//random() 0-4 including both the terms
function getrandom(){
  return(Math.floor(Math.random()*5));
}
getrandom();

//compoundInterest

function compoundInterest(p,n,t,i){
  return Math.pow(((i/100)/n +1),(n*t))*p;
};
compoundInterest(1700,4,6,4.7);

//Power function
function power(base, expo){
  if(expo===0){
    return 0;
  }
  return expo===1? base : base*power(base,expo-1);
}

power(3,0);

//Manual squareroot

function average(num1, num2){
  return ((num1+num2)/2);
}

function sqrt(number){
  var a=1, k=1;
  while(k<5){
    a=average(a,number/a);
    k++;
  }
  return a;
}
sqrt(10);
/* week1 Day2 */

function oldEnoughToDrink(age){
  if(age<18){
    console.log("Not old enough");
  }
  else{
    console.log("old enough");
  }
}
oldEnoughToDrink(18);

//Testing function 
function assert(exp,des){
  if(exp){
    console.log("test passed");
  }
  else{
    console.log(des);
  }
}
//String functions
console.log(" ************indexOf");
console.log("hello how are you how".indexOf("how"));
console.log("hello how are you how".indexOf("a"));
console.log("hello how are you how".indexOf("I"));

console.log("***************substring");
console.log("hello how are you how".substring(2));
console.log("hello how are you how".substring(2,7));
console.log("hello how are you how".substring(7,2));
console.log("hello how are you".substring(-3));

console.log("***************slice");
console.log("hello how are you how".slice(2));
console.log("hello how are you how".slice(2,7));
console.log("hello how are you how".slice(7,2));
console.log("hello how are you".slice(-3));

console.log("*****************includes");
console.log("hello how are you how".includes("how"));
console.log("hello how are you how".includes("ho"));
console.log("hello how are you how".includes("i"));

console.log("*****************toString");
var num=100;
console.log(num.toString());
console.log(parseInt(num.toString()));


// Bouncer

function bouncer(name,age){
  if(age<18){
    console.log( "Go home, "+ name);
    }
    else{
      console.log("welcome "+ name)
    }
}
bouncer("golu",17);

//max

function max(num1,num2){
  return num1>num2? num1:num2;
}
max(40,40)

//positive

function positive(num){
  return(Math.sign(num) ===1? true:false);
}
positive(5)

//random numbers
function randInt(n){
  return (Math.floor(Math.random()*(n+1)));
}

function guessMyNumber(num){
  var computerNumber= randInt(5);
  if(num === computerNumber){
    console.log("You guessed my number!");
  }
  else{
    console.log("Nope! That wasn't it!");
    console.log(computerNumber);
  }
}
guessMyNumber(3);

//**** w1D2 ****/

//bouncer
function bouncer(name,age){
  if((age<18)|| (name ==="Joe")){
    console.log( "Go home, "+ name);
    }
    else{
      console.log("welcome "+ name);
    }
}
bouncer("Joe",30);

function bouncer1(name,age){
  if((age<18)|| (name ==="Joe")){
    console.log( "Go home, "+ name);
    }
    else if((age<21)&&(age=>18)){
      console.log("No wristband");
    }
    else{
      console.log("wristband");
    }
}
bouncer1("golu",19);

//Demorgans
function or(num1,num2){
  var negateNum1 =!(num1);
  var negateNum2 =!(num2);
  return(!(negateNum1 && negateNum2));
}
or(true,false);

/**** w1d3 ***********/
function sum(n){
  return (n === 1 ? n : n+sum(n-1));
}
sum(4);

function factorial(n){
  return (n===1 ? n : n*factorial(n-1));
} 
factorial(4);

function repeatString(str,count){
  if(count ===0){
    return "";
  }
 else{
   return str+repeatString(str,count-1);
  }
}
repeatString("dog",1)

function fibo(n){
  if(n===0){
    return 1;
  }
  else if(n ===1){
    return 1;
    
  }
  else{
    return fibo(n-1)+fibo(n-2);
  }
}
fibo(5)

function sumAll(start,end){
  if (start === end){
    return end;
  }
  else{
    return start+sumAll(start+1,end);
  }
}
sumAll(3,5)

function productAll(start,end){
  if(start === end){
    return end;
  }
  else{
    return start*productAll(start+1,end)
  }
}

productAll(2,5);

function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

function add(num1, num2){
  if(num2===0){
    return num1;
    
  }
  else{
    return add(inc(num1),dec(num2));
  }
}
add(3,4);

function isEven(num){
  if(num ===1){
    return false;
  }
  else if (num ===0){
    return true;
  }
  else{
    return isEven(num-2);
  }
}
isEven(4)

function multiply(num1,num2){
  if(num2 ===1){
    return num1;
  }
  else{
    return num1+multiply(num1,num2-1);
  }
}

multiply(3,8)

function stringlength(str){
  if(str===""){
    return 0;
  }
  else{
    return 1+stringlength(str.slice(1));
  }
}
stringlength("hello")

function modulo(num1,num2){
  if(num1<num2){
    return num1;
  }
  else{
    return modulo(num1-num2,num2);
  }
}
modulo(5,1)

function countchars(str,char){
  if (str===""){
    return 0;
  }
  else if(str[0] === char){
    return 1+countchars(str.slice(1),char) ;
  }
  else{
    return countchars(str.slice(1),char);
  }
}
countchars("hello how hoo","h");


function indexOf(string,char) {
  if (string===""){
    return 1;
  }
  else if(string.length ===1){
    return 0;
  }
  else if (string[0] === char) {
    return 0;
  }
    
  return 1+ indexOf(string.slice(1), char);
}
indexOf("Welcome Mahima","d");


function sumofSquares(num){
  if(num ===0){
    return 0;
  }
  else if(num ===1){
    return 1;
  }
  else{
    return (num*num)+ sumofSquares(num-1);
  }
}
sumofSquares(5);

function sumofEvens(num){
  if(num ===0){
    return 0;
  }
  else if(num%2 ===0){
    return num+ sumofEvens(num-1);
  }
  else{
    return sumofEvens(num-1);
  }
}

sumofEvens(6)

/***************** w1d4 **************/
var count =0;
function counter(){
  count++;
  console.log(count);
  
}
counter();
counter();

function digitalSum(num){
  
 return  parseInt(num.toString().split("").reduce(function(acc,curr){
    return parseInt(curr) +parseInt(acc);
  }));
}
digitalSum(1337)

/************W2d1******************/
function odds(array){
  var result=[];
  for(var i=0;i<array.length;i++){
    if(array[i]%2 !==0){
      result.push(array[i]*2);
    }
    else{
      result.push(array[i]);
    }
  }
  return result;
}
odds([4, 9, 7, 2, 1, 8])

function first(array){
  return array[0];
  
}

function rest(array){
  return array.slice(1);
}
rest([3,2,7,5]);

function butlast(array){
  return array.slice(0,array.length-1);
}
butlast([3,2,4,7]);

function cons(ele,array){
  array.unshift(ele);
  return array;
}
cons(3,[1,2,4])

function conj(array,ele){
  array.push(ele);
  return array;
}

conj([1,2,4],3);

function mystery(array){
  if(array.length ===0){
    return [];
  }
  else{
    return conj(mystery(rest(array)),first(array) );
  }
}
mystery([1,2,3,4])

function sumall(array){
  if(array.length ===0){
    return 0;
  }
  else{
    return first(array)+sumall(rest(array));
  }
  
}

sumall([1,2,3,4,5]);

function squared(array){
  if(array.length===0){
    return [];
  }
  else{
    return cons((first(array)* first(array)),squared(rest(array)) );
  }
}
squared([1,2,3,4])

function evenall(array){
  if(array.length===0){
    return [];
  }
  else if(first(array)%2 ===0){
    return cons(first(array),evenall(rest(array)));
  }
  else{
    return evenall(rest(array));
  }
}
evenall([1,2,4,6,3,9,10])

// Array Iteration
function assert(exp,des){
  if(exp){
    console.log("test Passed");
  }
  else{
    console.log(des);
  }
}
function sum(array){
  return array.reduce(function(a,c){
    return a+c;
  });
}

function max(array){
  return array.reduce(function(acc,curr){
    if(curr>acc){
      return curr;
    }
    else{
      return acc;
    }
  });
}

function longestWord(str){
  return str.split(" ").reduce(function(acc,curr){
    if(curr.length >acc.length){
      return curr;
    }
    else{
      return acc;
    }
  });
}

function remove(array,ele){
  return array.filter(function(number){
    return (number !==ele);
  });
}

function evens(array){
  return array.filter(function(number){
    return (number %2===0);
  });
}

function average(array){
  return array.reduce(function(acc,curr){
    return  acc+curr;
  })/ array.length;
}

function min(array){
  return array.reduce(function(acc,curr){
    if(curr < acc){
      return curr;
    }
    else{
      return acc;
    }
  });
}

function countchars(str,char){
  var total=0;
  str.split("").forEach(function(letter){
    if(letter === char){
      total++;
    }
  });
  return total;
}

function evenLengthWords(array){
  return array.filter(function(words){
    return words.length %2 ===0;
  });
}

function reverse(str){
  if(str.length===0){
    return "";
  }
  else{
    return reverse(str.slice(1))+ str[0];
  }
}
assert(sum([1,2,3]) === 6, "wrong result");
assert(max([2,3,6,10,1]) === 10," wrong result");
assert(longestWord("the quick brown fox jumpeeeed over the lazy dog")==="jumpeeeed", "wrong result");
assert(JSON.stringify(remove([1,2,3,5,3,7],3))=== JSON.stringify([1,2,5,7]),"wrong result");
assert(JSON.stringify(evens([1,2,3,5,6,7]))=== JSON.stringify([2,6]),"wrong result");
assert(average([1,2,3,4,0])=== 2, "wrong result");
assert(min([2,6,8,1,5]) === 1, "wrong result");
assert(countchars("hello how are you ","h") === 2,"wrong result");
assert(JSON.stringify(evenLengthWords(["hello","how","are","you","dear"])) === JSON.stringify(["dear"]),"wrong result");
assert(reverse("mahima")==="amiham","wrong result");

/***************w2d2 ********************/
var alyssa = {
  name: {
    first: "Alyssa",
    middle: "P.",
    last: "Hacker"
  },
  age: 26
};
function fullName(person){
  var result="";
  for (var keys in person.name){
    result+= person.name[keys] + " ";
  }
  return result;
}
fullName(alyssa); // => "Alyssa P. Hacker"

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function name(people){
  people.forEach(function(person){
    var result="";
    for(var keys in person.name){
      result+= person.name[keys] +" ";
    }
    console.log(result);
  })
  
}
name(people);

function age(people){
  var total=0;
  people.forEach(function(person){
    total+= person.age;
  });
  return total/people.length;
}

age(people);

function certain(people){
 return  people.filter(function(person){
    return person.age > 30;
  });
}
certain(people);

var dirtyObject = {
  _fht: 192492,
  name: "Alyssa P. Hacker",
  age: 26,
  _byz: 939205,
  _ttrs: 510852
}
function clean(obj){
  var result={};
  for(var keys in obj){
    if (keys[0] !== "_"){
      result[keys]= obj[keys];
    }
  }
  return result;
}

clean(dirtyObject);

 function removeOddValues(people){
   var result={};
   for(var keys in people){
     if(typeof(people[keys]) === 'number' && people[keys]%2 ===0){
       result[keys]= people[keys];
     }
   }
   return result;
 }
 
 removeOddValues(dirtyObject);
 
 function countWords(s){
   var result={};
   s.split(" ").forEach(function(words){
     if(result[words] !==undefined ){
       result[words] = result[words]+1;
     }
     else{
       result[words] =1;
     }
   });
   return result;
 }
 
 countWords("hello how are you");
 
 function select(obj,key){
   var result={};
    key.forEach(function(item){
      for(var k in obj){
        if(k===item){
          result[k] = obj[k];
        }
      }
    });
   return result;
 }
 select({a: 1, b: 2, c: 3}, ["a","c"]);
 
 function extend(obj1, obj2){
   for(var keys in obj2){
     obj1[keys]= obj2[keys]
     
   }
   return obj1;
 }
extend({a: 1, c: 3}, {b: 2, c: 4}); 

/**************** w3d1 *************************  HOFs */
function each(array,func){
  for(var i =0;i<array.length;i++){
    func(array[i]);
  }
}

//2
function sumSquares(numbers){
  var total=0;
  each(numbers,function(item){
    total+=item;
  });
  return total;
}
sumSquares([1,2,3])

// 3
function cube(x){
  return x*x*x;
}

function sumcube(numbers){
  var total=0;
  each(numbers,function(item){
    total+=cube(item);
  });
  return total;
}
sumcube([1,2,3]);

//4
function product(numbers){
  var result=1;
  each(numbers,function(item){
    result *= item;
  });
  return result;
}
product([1,2,3])

//5
function cubeAll(array){
  var result=[];
  each(array,function(item){
    result.push(cube(item));
  });
  return result;
}
cubeAll([1,2,3]);

//6
function odds(array){
  var result=[];
  each(array,function(item){
    if(item%2 !==0){
      result.push(item);
    }
  });
  return result;
}
odds([1,2,5,4,8,9]);

//More Prectices
//1
function sumByAllElementsMultipliedByFour(array){
  var result=0;
  each(array,function(item){
    result+=(item*4);
  });
  return result;
}
sumByAllElementsMultipliedByFour([1,2,3]);

//2
function sumBy(array,func){
  var result=0;
  each(array,function(item){
    result+=func(item);
  });
  return result;
}

sumBy([1,2,3],cube)

//Advanced Practices

//1
function doubleAll(array){
  return array.map(function(item){
    return item*2;
  });
}
doubleAll([1,2,3])

//3
function upper(str){
  return str.split("").map(function(letter){
    return letter.toUpperCase();
  }).join("");
}
upper("hello, world");

//3.2
function map(array,func){
  var result=[];
  for(var i=0;i<array.length;i++){
    result.push(func(array[i]));
  }
  return result;
}

map([1,2,3],function(x){
  return x*2;
});

//3.3
map(["hello", "world"],function(word){
  return word.toUpperCase();
});

map(["the", "quick", "brown", "fox", "jumped"],function(word){
  return word.length;
});

var people = [
  {name: "Alyssa P. Hacker", age: 26},
  {name: "Ben Bitdiddle", age: 34},
  {name: "Eva Lu Ator", age: 19},
  {name: "Lem E. Tweakit", age: 40}
];
map(people, function(obj){
  return obj.name;
})
map(people, function(obj){
  return obj.name + " is " +obj.age;
});

//filtering
//1
function evens(array){
  return array.filter(function(num){
    return num%2 ===0;
  })
}
evens([1,2,4,7,10]);

//2
function multiplesOfThree(array){
  return array.filter(function(num){
    return num %3 ===0;
  });
}
multiplesOfThree([1,3,9,10,6]);

//3
function positives(array){
  return array.filter(function(num){
    return num >=0;
  });
}
positives([1,-5,3,7,-10]);

//4
function evenlength(array){
  return array.filter(function(word){
    return  word.length %2 ===0;
  });
}
evenlength(["hello","how","dear"])

//5
function filter(array, func){
  var result=[];
  for(var i =0;i< array.length; i++){
    if(func(array[i])){
      result.push(array[i]);
    }
  }
  return result;
}
filter([1,2,3,4],function(item){
  return item%2===0;
});

function startsWithChar(str, character) {
  return filter(str.split(" "),function(item){
    return item[0]===character;
  });
}

startsWithChar("the quick brown fox jumps over the lazy dog","q")


//All the function 
function each(array,func){
  for(var i =0;i<array.length;i++){
    func(array[i]);
  }
}


function map(array,func){
  var result=[];
  for(var i=0;i<array.length;i++){
    result.push(func(array[i]));
  }
  return result;
}


function filter(array, func){
  var result=[];
  for(var i =0;i< array.length; i++){
    if(func(array[i])){
      result.push(array[i]);
    }
  }
  return result;
}