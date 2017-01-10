/***************************coderbyte****************************/
/* Question 7: SimpleSymbols
Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 
Sample Test Cases
Input:"+d+=3=+s+"
Output:"true"

Input:"f++d+"
Output:"false"
*/

function SimpleSymbols(str) { 

  // code goes here 
  var regex=/[a-zA-Z]/;
  var result= str.split("");
  for(var i=0;i< result.length;i++){
      if(result[i].match(regex)){
          if((result[i-1] ==="+") &&(result[i+1]==="+")){
              return true;
          }
          else{
              return false;
          }
      }
  }
  
         
}

SimpleSymbols( "2+a+a+");

/* Question 8: checknums
Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1. 
*/
function CheckNums(num1,num2) { 

  // code goes here  
  return (num1 === num2)? -1:(num2>num1);
}

/*Question 10: AlphabetSoup
Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 
Sample Test Cases
Input:"coderbyte"
Output:"bcdeeorty"

Input:"hooplah"
Output:"ahhloop"
*/


function AlphabetSoup(str) { 

  // code goes here  
  return str.split("").sort().join("");
}

AlphabetSoup("coderbyte");

/*Question 11: ABchecker
Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 
Sample Test Cases
Input:"after badly"
Output:"false"

Input:"Laura sobs"
Output:"true"
*/

function ABCheck(str) { 

  // code goes here  
  var regex= /a...b|b...a/;
  return regex.test(str);
         
}
ABCheck("Laura sobs");

/*
Question 12:VowelCount
Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge. 
Sample Test Cases
Input:"hello"
Output:2

Input:"coderbyte"
Output:3
*/

function VowelCount(str) { 

  var patt = /[aeiou]/gi;
  
  var arr = str.match(patt);
  
  if (arr == null) {
    return 0;
  }
  else {
    return arr.length; 
  }
}
VowelCount("hello");

/* Question 13:WordCount
Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (e.g. "Never eat shredded wheat or cake" would return 6). Words will be separated by single spaces. 
Sample Test Cases
Input:"Hello World"
Output:2

Input:"one 22 three"
Output:3
*/

//my
function WordCount(str) { 

  // code goes here  
  return str.split(" ").length;
         
}
   

/*
question 14:
Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 
Sample Test Cases
Input:"xooxxo"
Output:"true"

Input:"x"
Output:"false"
*/
function ExOh(str) { 

  // code goes here  
    var counto=0, countx=0;
    for(var i=0;i<str.length;i++){
        if(str[i] ==="x"){
            countx++;
        }
        else if(str[i]==='o'){
            counto++;
        }
    }
return counto ===countx ? true:false;
         
}

ExOh("x");
/*
question 15
Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 
Sample Test Cases
Input:"never odd or even"
Output:"true"

Input:"eye"
Output:"true"
*/
function Palindrome(str) { 
var result=str.replace(/\W/g,"");
 
for(var i=0,j=result.length-1;i<= j; i++,j--){
      if(result[i] !== result[j]){
          return false;
      }
  }
  return true;
         
}
   
// keep this function call here 
Palindrome("rotor plus three");
/*Challenge
Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters. 
Sample Test Cases
Input:"coder","byte","code"
Output:"code"

Input:"abc","defg","z","hijk"
Output:"abc"
*/

function rd(array){
  
  
  var x =0;
  while (x<=2){
    var max= array[0];
    for(var i=0;i<array.length;i++){
     
      if(array[i].length > max.length){
        max= array[i];
      }
    }
    var index = array.indexOf(max);
    var result= array.splice(index,1);
    x++;
  }
  return result[0];
}

rd(["coder","byte","code"]);

/*Challenge
Using the JavaScript language, have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false. 
Sample Test Cases
Input:4
Output:"true"

Input:124
Output:"false"
*/


function power(num){
  for(var i =0;i< Math.floor(Math.sqrt(num));i++){
    if(Math.pow(2,i) === num){
      return true;
    }
    
  }
  return false;
  
}

/*Challenge
Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 
Sample Test Cases
Input:4
Output:0

Input:19
Output:2
*/
function AdditivePersistence(num) { 
  var value= String(num).split("");
  var count=0;
  while(value.length >1){
    var result =0;
    for(var i=0;i<value.length;i++){
      result+= parseInt(value[i]);
    }
    count++;
    value= String(result).split("");
  }
  return count;
}

AdditivePersistence(19)

/*Challenge
Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 
Sample Test Cases
Input:4
Output:0

Input:25
Output:2
*/
function MultiplicativePersistence(num) { 
  var value= String(num).split("");
  var count=0;
  while(value.length >1){
    var result =1;
    for(var i=0;i<value.length;i++){
      result*= parseInt(value[i]);
    }
    count++;
    value= String(result).split("");
  }
  return count;
}
MultiplicativePersistence(5);

/*Challenge
Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your program should return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5. 
Sample Test Cases
Input:"1","2","E","E","3"
Output:"1,2"

Input:"4","E","1","E","2","E","3","E"
Output:"4,1,2,3"
*/


function OffLineMinimum(strArr){
  var temp =[];
  var result=[];
  for(var i =0;i<strArr.length;i++){
    if(strArr[i] !=="E"){
      temp.push(strArr[i]);
    }
    else{
      temp.sort(function(a,b){
        return a-b;
      });
      result.push(temp.shift());
    }
  }
  return String(result);
}

OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]);

/*Challenge
Using the JavaScript language, have the function ChangingSequence(arr) take the array of numbers stored in arr and return the index at which the numbers stop increasing and begin decreasing or stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the array where the numbers were increasing and the next number begins a decreasing sequence. The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0. 
Sample Test Cases
Input:-4, -2, 9, 10
Output:-1

Input:5, 4, 3, 2, 10, 11
Output:3
*/
function ChangingSequence(arr){
  var dec = false;
  var inc = false;
  for(var i=0;i<arr.length-1;i++){
    if((arr[i]> arr[i+1]) &&(!dec)){
      
      inc=true;
    }
    else if ((arr[i]> arr[i+1]) && (dec)){
      return i;
    }
    else if((arr[i]<arr[i+1])&&(!inc)){
      dec= true;
    }
    else if((arr[i]<arr[i+1])&&(inc)){
      return i;
    }
  }
  return -1;
}

ChangingSequence([-4, -2, 9, 10])
/*Challenge
Using the JavaScript language, have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your program should return the string false. 
Sample Test Cases
Input:5,11,1,5,1
Output:true

Input:1,8,2,4,4
Output:false
*/

function OverlappingRanges(arr){
  var arr1=[];
  var arr2 =[];
  
  for(var i=arr[0];i<= arr[1];i++){
    arr1.push(i);
  }
  for(var j=arr[2];j<= arr[3];j++){
    arr2.push(j);
  }
 var result= arr1.filter(function(num){
    return arr2.includes(num)
  });
  
  return result.length >= arr[4] ? true:false
}

OverlappingRanges([1,2,1,3,1])

/*Challenge
Using the JavaScript language, have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing sequence where each element in the array is greater than the sum of all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your program should return the string "false" 
Sample Test Cases
Input:1,2,3,4
Output:"false"

Input:1,2,5,10
Output:"true"
*/

function Superincreasing(arr){
  for(var i =0;i<arr.length-1;i++){
    if(arr[i+1]<=(arr[i]+arr[i-1])){
      return false;
    }
  }
  return true;
}
 Superincreasing([1,2,5,10]);
 
/*Challenge
Using the JavaScript language, have the function HammingDistance(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length and return the Hamming distance between them. The Hamming distance is the number of positions where the corresponding characters are different. For example: if strArr is ["coder", "codec"] then your program should return 1. The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers. 
Sample Test Cases
Input:"10011", "10100"
Output:3

Input:"helloworld", "worldhello"
Output:8
*/

function HammingDistance(strArr){
  var result=0;
  for(var i=0;i<strArr[0].length;i++){
    if(strArr[0][i] !== strArr[1][i]){
      result++;
    }
  }
  return result;
}

HammingDistance(["helloworld", "worldhello"])

/*Challenge
Using the JavaScript language, have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height. 
Sample Test Cases
Input:"(1 1)","(1 3)","(3 1)","(3 3)"
Output:4

Input:"(0 0)","(1 0)","(1 1)","(0 1)"
Output:1
*/
function RectangleArea(strArr){
  var area=[];
  for(var i=0;i<strArr.length;i++){
    var result =strArr[i].match(/[0-9]/g);
    if(result[0] !== result[1]){
      
      area.push(result[0]-result[1])
    }

    
  }
  console.log(area);
  return area.reduce(function(a,c){
    return Math.abs(a*c);
  })
}
RectangleArea(["(0 0)","(5 0)","(0 3)","(5 3)"])

/*
Challenge
Using the JavaScript language, have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101" 
Sample Test Cases
Input:"100", "000"
Output:"100"

Input:"00011", "01010"
Output:"01011"
*/
function BitwiseOne(strArr) {
  var num1 = strArr[0];
  var num2 = strArr[1];
  var result="";
  for(var i =0;i<num1.length;i++){
    if((num1[i]==="1") || (num2[i]==="1")){
      result+="1";
    }
    else{
      result+="0";
    }
  }
  return result;
}
BitwiseOne(["00011", "01010"]);

/*Challenge
Using the JavaScript language, have the function OtherProducts(arr) take the array of numbers stored in arr and return a new list of the products of all the other numbers in the array for each element. For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, is [120, 60, 40, 30, 24]. The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You should generate this new array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. The array will contain at most 10 elements and at least 1 element of only positive integers. 
Sample Test Cases
Input:1,4,3
Output:"12-3-4"

Input:3,1,2,6
Output:"12-36-18-6"
*/

function OtherProducts(arr){
  var result="";
  var product= arr.reduce(function(a,c){
    return a*c;
  });
  
  for(var i =0;i<arr.length;i++){
    result+=(product/arr[i]) +"-";
  }
  return result.slice(0,-1);
}
OtherProducts([3,1,2,6]);

/*
Challenge
Using the JavaScript language, have the function WaveSorting(arr) take the array of positive integers stored in arr and return the string true if the numbers can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ..., otherwise return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], then a possible wave ordering of the numbers is: [2, 0, 4, 1, 4, 1]. So for this input your program should return the string true. The input array will always contain at least 2 elements. More examples are given below as sample test cases. 
Sample Test Cases
Input:0, 1, 2, 4, 1, 1, 1
Output:"false"

Input:0, 4, 22, 4, 14, 4, 2
Output:"true"
*/
