function assert(exp,des){
  if(exp){
    console.log("Test Passed");
  }
  else{
    console.log(des);
  }
}

// Question 1: Have the function ABCheck(str) take the str parameter being passed and return the string true
// if the characters a and b are separated by exactly 3 places anywhere in the string at least once
// (ie. "lane borrowed" would result in true because there is exactly three characters between a and b).
// Otherwise return the string false. 
 function ABChecker(str1){
   var pattern = /a...b/gi;
   if(str1.match(pattern)){
     return true;
   }
   return false;
 }
 
 
 assert(ABChecker("lane borrowed") === true, "wrong result");
 
/* Question 2: Have the function AdditivePersistence(num) take the num parameter 
being passed which will always be a positive integer and return its additive
 persistence which is the number of times you must add the digits in num until you
  reach a single digit. For example: if num is 2718 then your program should 
  return 2  because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 
*/
function AdditivePersistence(num){
  var check = num.toString();
  var counter =0;
  
  while(check.length >1){
    var result =0;
    for(var i of check){
      result+=Number.parseInt(i);
    }
    check = result.toString();
    counter++;
  }
  return counter;
}

assert(AdditivePersistence(2718) ===2, "wrong result");



/*Question 3: Have the function AlphabetSoup(str) take the str string parameter being passed and
return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume
numbers and punctuation symbols will not be included in the string.*/

function AlphabetSoup(str1){
  str1= str1.split("");
  for(var i =0;i<str1.length;i++){
    for(var j =0; j< str1.length-1;j++){
      if(str1[j] > str1[j+1]){
        var temp = str1[j];
        str1[j]= str1[j+1];
        str1[j+1] =temp;
      }
    }
  }
  return str1.join("");
}

assert(AlphabetSoup("hello")==="ehllo", "wrong result");

/* Question 4: Using the JavaScript language, have the function ArithGeo(arr) 
take the array of numbers stored in arr and return the string 
"Arithmetic" if the sequence follows an arithmetic pattern or return 
"Geometric" if it follows a geometric pattern. 
If the sequence doesn't follow either pattern return -1. 
An arithmetic sequence is one where the difference between each of 
the numbers is consistent, where as in a geometric sequence, 
each term after the first is multiplied by some constant or common ratio. 
Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 
*/
function AirthGeo(array){
  var Airthdifference =array[0] - array[1];
  var GeoDifference = array[1] /array[0];
  var airthCounter=0;
  var geoCounter=0;
  for(var i =1;i< array.length-1;i++){
    if(array[i] - array[i+1] ===Airthdifference ){
      airthCounter++;
    }
    else if(array[i+1]/array[i]===GeoDifference ){
      geoCounter++;
    }
    else{
      airthCounter =0;
      geoCounter =0;
    }
  }
  if(airthCounter=== 0 && geoCounter ===0){
    return -1;
  }
  return airthCounter === 0 ? "Geometric" : "Airthmetic"
}


assert(AirthGeo([2, 6, 18, 53]) ===-1, "wrong result");

/* Question 5: Using the JavaScript language, have the function ArrayAdditionI(arr) 
take the array of numbers stored in arr and return the string true if 
any combination of numbers in the array can be added up to equal the 
largest number in the array, otherwise return the string false. 
For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
The array will not be empty, will not contain all the same elements, and may contain negative number*/
function ArrayAdditionI(array){
  var max;
 var sorted = array.sort(function(a,b){
    return a-b;
  });
  max= sorted[array.length-1];
  for(var i=sorted.length-2;i >=0;i--){
   
    if(max-sorted[i] === sorted[i-1]){
      return true;
    }
    else{
      max= max-sorted[i];
    }
  }
  return false;
  
}

assert(ArrayAdditionI([4, 6, 23, 10, 1, 2])=== true, "Wrong result");

/* Question 6 : Using the JavaScript language, have the function CheckNums(num1,num2) 
take both parameters being passed and return the string true if num2 
is greater than num1, otherwise return the string false. 
If the parameter values are equal to each other then return the string -1.*/
function CheckNums(num1, num2){
  if(num1 === num2){
    return -1;
  }
  return num1 > num2 ? false: true;
}


assert(CheckNums(4,5)=== true, "wrong result")
/* question 7 : Using the JavaScript language, have the function DashInsert(str) 
insert dashes ('-') between each odd numbers in str. 
For example: if str is 454793 the output should be 4547-9-3. 
Don't count zero as an odd number. */
function DashInsert(str1){
  
  return str1.split("").map(function(letter){
    if(Number.parseInt(letter)%2 !==0){
      return letter +"-";
    }
    else{
      return letter;
    }
  }).join("");
}
assert(DashInsert("454793") === "45-47-9-3-", "wrong result")

/* question 7.b: 
Using the JavaScript language, have the function DashInsert(str) 
insert dashes ('-') between each two odd numbers in str. 
For example: if str is 454793 the output should be 4547-9-3. 
Don't count zero as an odd number. */
function DashInsert1(str1){
  var result ="";
  for(var i =0;i<str1.length-1 ;i++){
    if((str1[i] %2 !==0)&&(str1[i+1]%2 !==0)){
      result+= str1[i] +"-"
    }
    else{
      result+=str1[i];
    }
  }
  return result+str1[str1.length-1];
}

assert(DashInsert1("454793") === "4547-9-3", "wrong result")
/* Question 8
Using the JavaScript language, have the function DivisionStringified(num1,num2) 
take both parameters being passed, divide num1 by num2, and return the result 
as a string with properly formatted commas. If an answer is only 3 digits long, 
return the number with no commas (ie. 2 / 3 should output "1"). 
For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345". 
*/

function DivisionStringified(num1, num2){
  var result = Math.trunc((num1/num2)).toString();
  var check =[];
  var counter =0;
  for(var i =result.length-1; i>=0; i--){
    if(counter===3){
      check.unshift(",");
      counter =0;
    }
    check.unshift(result[i]);
    counter++;
  }
  return check.join("");
}


assert(DivisionStringified(123456789,10000)==="12,345","wrong result")