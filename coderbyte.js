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