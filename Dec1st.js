//Difference between map and foreach

var names =["mahi","sri","mahisrii", "me","you"];
console.log(names.map(function(name){
  return name.toUpperCase();
}))

var check = names.forEach(function(name){
  return (name.toUpperCase());
})
console.log(check)


//Implematation of map 

function map(array,func){
  var result =[];
  array.forEach(function(name){
    result.push(func(name));
  })
  return result;
}

 var check =map(names,function(name){
  return name.toUpperCase();
})

console.log(check);

//Implementation of filter

function filter(array, func){
  var result =[];
  array.forEach(function(name){
    if(func(name)){
      result.push(name)
    }
    
  });
  return result;
}

var check =filter(names,function(name){
  return name.length >5;
})

console.log(check)


//Codeacademy 
var text="Hello sri, how are you ? hello sri, how do u do ?"
var myName= "sri";
var hits=[];
for(var i=0;i<text.length;i++){
    
    if(text[i].toLowerCase() === myName[0].toLowerCase()){
        for(var j =i;j< i+myName.length;j++){
            if(text[j].toLowerCase() === myName[j-i].toLowerCase()){
                hits.push(text[j]);
            }
        }
    }
}
if(hits.length ===0){
    console.log("Your name wasn't found!");
}
else{
    console.log(hits);
}

// 3.1 Fizzbuzz

function fizzBuzz(){
  for(var i=0; i<=10; i++){
    if((i%15 ===0)){
      console.log("FizzBuzz");
    }
    else if(i%3 ===0){
      console.log("fizz");
    }
    else if(i%5 ===0){
      console.log("buzz");
    }
  
  else{
  console.log(i)
  }
}
}

fizzBuzz();

//3.2 Two sum problem (complexity of O(n))
function assert(exp, des){
  if(exp){
    console.log("test passed");
  }
  else{
    console.log(des);
  }
}

function twoSum(array, total){
  var result={};
  var temp;
  for(var i =0; i< array.length;i++){
    temp = total - array[i];
    if(result[temp] !== undefined){
      return true;
    }
    else{
      result[temp]= true;
    }
  }
  return false;
  
}

assert((twoSum([1,2,3,2,6,4,0], 4) === true),"wrong result" );

//3.3 Sum of nested arrays

function nestedSum(array){
  var total =0;
  for(var i =0;i<array.length;i++){
    if(typeof(array[i]) !== 'number' ){
      total+=nestedSum(array[i]);
    }
    else{
      total+=array[i];
    }
  }
  return total;
}


assert((nestedSum([1, 1, 1, [3, 4, [8]], [5]] )=== 23),"wrong sum");

//3.4 Clock hand problem

//3.5 Determine	if	N	is	a	prime	number

function checkPrime(num){
  var temp = Math.sqrt(num);
  if(temp%1 ===0){
    return false;
  }
  for(var i=2;i<=temp;i++ ){
    if(num%i ===0){
      return false;
    }
  }
  return true;
}

assert(checkPrime(9)===false, " wrong result");


//3.7 Remove	set	of	characters	from	a	string

function removeChars(array, str1){
  var obj1={};
  var result ="";
  for(var i =0;i<array.length;i++){
    obj1[array[i]] = true;
  }
  
  for(var j=0;j<str1.length;j++){
    if(obj1[str1[j]] === undefined){
      result+=str1[j];
    }
  }
  return result;
}



assert(removeChars(['h', 'e', 'w', 'o'], "hello world") ===  "ll rld","wrong result");
function assert(exp,des){
  if(exp){
    console.log("Test Passed");
  }
  else{
    console.log(des);
  }
}

/*3.9 For this  challenge you are given a string  and you should  return  the first character that  is  unique  in  the entire  string. For example*/
function nonRepeating(str1){
  var obj1={};

  for (var i =0;i<str1.length;i++ ){
    if(obj1[[str1[i]]] !== undefined)
    obj1[str1[i]]=obj1[str1[i]]+1 ;
    else{
      obj1[[str1[i]]]=1;
    }
  }
 
  for(var j=0;j<str1.length;j++){
    if(obj1[str1[j]] === 1){
      return str1[j];
    }
  }
  return "no unique values";
}



assert((nonRepeating("hello henry") === "o"), "not a firt non repeating letter");

/*3.10 : Count  words that  have  at  least 3 continuous  vowels
*/
function continousVowels(str1){
  var words= str1.split(" ");
  var counter =0;
  var pattern = /[aeiou]{3,}/gi;
  
  for(var word of words ){
    if(word.match(pattern) !== null){
    counter++;
    }
  }
  return counter;
}

assert(continousVowels("aeec good iock eai") === 2, "Wrong count");


/* 3.11 Remove  all adjacent  matching  characters */
function removeAdjacent(str1){

  var array = str1.split("");
  for(var i =0; i<array.length-1;i++){
    if (array[i] === array[i+1]){
      array.splice(i,2);
      
    }
  
  }
  return array.join("");
}


assert(removeAdjacent("aaagykkok") === "agyok", "wrong result");

/* 3.12 Find  the majority  element (element  that  appears more  than  n/2 times)
Time complexity : O(n);
*/
function majorityElement(array){
  var max = array.length/2;
  var obj1={};
  var result;
  array.forEach(function(element){
    if(obj1[element]=== undefined){
      obj1[element] =1;
    }
    else{
      obj1[element] = obj1[element]+1;
    }
  });
  
  for(var keys in obj1){
    if(obj1[keys] > max){
      result = keys;
    }
  }
  return Number.parseInt(result);
}

assert(majorityElement( [1, 4, 5, 5, 5, 5]) ===5, "wrong result");


/* 3.13 Switching light bulbs problem */


/* 3.14 List  of  integers  that  overlap in  two ranges */
function overlap(array1,array2){
  var result=[];
  
  for(var i =array1[0]; i<= array1[1] ;i++){
    if((i >= array2[0] )&&(i<= array2[1])){
      result.push(i);
      
    }
  }
 return result;
}


assert( overlap([5,20],[17,21]) ===[17,18,19,20], "wrong result");
