function assert(exp,des){
  if(!exp){
    console.log(des)
  }
  else{
    console.log("test passed")
  }
}

/*Q 7 Write a method that takes an array of numbers in. Your method should
return the third greatest number in the array. You may assume that
the array has at least three numbers in it. */

//Soution 2
function thirdLargest(array){
  var largestIndex = 0;
  var count=0;
  var result =[];
  while(count< 3){
    for(var i =0; i< array.length; i++){
      if(array[i] > array[largestIndex]){
        largestIndex = i;
      }
    }
   result = array.splice(largestIndex,1);
   count ++;
  }
  return result.toString();
  
}

assert((thirdLargest([3,5,1,7,9,3,1])) === '5', "Not the 3rd largest number");

//dasherizer

function dash(num){
  var value = String(num);
  var result =[]; 
  for(var i=0;i<value.length;i++){
    if((value[i]%2 !==0)){
     result.push("-",value[i],"-");
     
    }
    else{
      result.push(value[i]);
    }
  }
  if( result[0] === "-"){
    result.splice(0,1)
  }
  if(result[result.length-1] === "-"){
    result.splice(result.length-1,1)
  }
    
  return result.join("").replace(/--/g,"-");
}
dash(32233);

//scramble

function scramble(str,pos){
  var result="";
  
for(var i=0;i<pos.length;i++){
  result+= str[pos[i]];
}
return result
}

scramble("markov", [5, 3, 1, 4, 2, 0])

//isPrime

function isPrime(number){
  for(var i=2;i<=Math.sqrt(number);i++){
    if(number%i ===0){
      return false;
    }
  }
  return true;
}

isPrime(16)

/* Q17 Write a method that returns the `n`th prime number. Recall that only
numbers greater than 1 can be prime.*/

//Solution
function nthPrime(n){
  var result =[2];
  for(var i =3; result.length <= n; i++){
    if(isPrime(i)){
      result.push(i);
    }
  }
  return result[n-1];
  
  
}


assert(nthPrime(4)===7,"Wrong result");


/* Q12 Write a method that takes in a string. Your method should return the
most common letter in the string, and a count of how many times it
appears. */

//soution : complexity O(n^2)
function mostCommon(str1){
  var obj1 ={};
  var maxCount =0;
  var maxKey ='';
  str1.toLowerCase().split("").forEach(function (letter){
    if(obj1.hasOwnProperty(letter)){
      obj1[letter]= obj1[letter] +1;
    }
    else{
      obj1[letter]=1;
    }
    return obj1;
  });
  
  
  for(var keys in obj1){
    if(obj1[keys] > maxCount){
      maxCount = obj1[keys];
      maxKey = keys;
    }
    
  }
  return maxKey;
  
}



assert((mostCommon('abbcadeaaca') ==='a'), "Not the most common letter")


/* Q 13 Write a method that takes in a number and returns a string, placing
# a single dash before and after each odd digit. There is one
# exception: don't start or end the string with a dash.*/

//Solution

function dashString(num){
  var array = num.toString().split("");
 return array.map(function(letter, index){
    var value = Number.parseInt(letter);
    if((value % 2 !== 0)&& (index === 0)){
      return (letter = letter + "-");
    }
    else if((value% 2 !== 0)&& (index === array.length-1) ){
     return( letter = "-"+ letter);
    }
    else if (value% 2 !== 0){
      return (letter = "-"+ letter + "-");
    }
    else{
      return letter;
    }
  }).join("");
}


assert(dashString(203) === "20-3", "Not a dashed expression")


/* Q 14  Write a method that takes in a string of lowercase letters and
# spaces, producing a new string that capitalizes the first letter of
# each word.*/

//Soution 

function captitalize(string1){
  return string1.split(" ").map(function(word){
    return word[0].toUpperCase()+word.slice(1,word.length);
  }).join(" ");
}


assert(captitalize("i am mahima") === "I Am Mahima", "Not properly capitalized")



/* Q16 Write a method that takes in an integer (greater than one) and
returns true if it is prime; otherwise return false.*/

//Solution
function isPrime(num){
  if(num !== 2){
  var limit = Math.floor(Math.sqrt(num));
  for(var i=2; i<= limit; i++){
    if(num % i===0){
      return false;
    }
  }
  return true;
}
return true;
}


assert(isPrime(93),"Not a prime")

/* Q17 Write a method that returns the `n`th prime number. Recall that only
numbers greater than 1 can be prime.*/

//Solution
function nthPrime(n){
  var result =[2];
  for(var i =3; result.length <= n; i++){
    if(isPrime(i)){
      result.push(i);
    }
  }
  return result[n-1];
  
  
}


assert(nthPrime(4)===7,"Wrong result");


/* Q18 Write a method that takes in a string of lowercase letters (no
# uppercase letters, no repeats). Consider the *substrings* of the
# string: consecutive sequences of letters contained inside the string.
# Find the longest such string of letters that is a palindrome */


//Solution 

function is_Palindrome(str){
  if(str.length >=3){
  for(var i=0, k=str.length-1; i<k; i++,k--){
    if(str[i] !== str[k]){
      return false;
    }
  }
   return true;
  }
  return false;
}

function longest_palindrome(str1){
  var count =3;
  var maxLength=1;
  var maxString=str1[0];
  
  while(count<= str1.length){
    for(var i =0; i< str1.length; i++){
      var word= str1.slice(i,i+count);
      if(is_Palindrome(word)){
        maxLength =count;
        maxString=word;
      }
      
    }
    count ++;
  }
  return maxString
}


assert(longest_palindrome("abcbdefddfe")==="efddfe", "Not the largest palindrome")

/* Q 19 Write a method that takes in two numbers. Return the greatest
# integer that evenly divides both numbers.*/
function greatest_common_factor(num1,num2){
  var maxNumber;
  var minNumber;
  if(num1 === num2){
    return 1;
  }
  else if (num1 > num2){
    maxNumber = num1;
    minNumber= num2
  }
  else {
    maxNumber = num2;
    minNumber =num1;
  }
  
  if(maxNumber% minNumber !== 0){
    minNumber = (maxNumber% minNumber);
  }
return minNumber;
}


assert(greatest_common_factor(16,24) === 8, "Wrong result");

/* Q 20 Write a method that takes in an integer `offset` and a string.
# Produce a new string, where each letter is shifted by `offset`. You
# may assume that the string contains only lowercase letters and
# spaces.*/

function ceaser(str1,shift){
  return str1.split("").map(function(letter){
    if(letter ===" "){
      return letter;
    }
    var coded = letter.charCodeAt(0)+shift
    if(coded < 122){
    return(String.fromCharCode(coded));
    }
    else{
      return(String.fromCharCode(96+(coded-122)));
    }
  }).join("");
}

//Solution 2
function ceaser(str1,shift){
  return str1.split("").map(function(letter){
    if(letter ===" "){
      return letter;
    }
    var coded = ((letter.charCodeAt(0)- "a".charCodeAt(0))+shift)%26;
    return String.fromCharCode("a".charCodeAt(0)+coded)
  }).join("");
}

assert(ceaser("abc xyz",3) === "def abc", "Wrongly encrypted");


/* Q 21 Write a method that takes in a string and returns the number of
# letters that appear more than once in the string. You may assume
# the string contains only lowercase letters. Count the number of
# letters that repeat, not the number of times they repeat in the
# string.*/

function stringCounter(str1){
  var obj1 ={};
  var count=0;
  str1.split("").forEach(function(letter){
    if(obj1.hasOwnProperty(letter)){
      obj1[letter] = obj1[letter]+1;
    }
    else{
      obj1[letter]= 1;
    }
  });
  
  for(var keys in obj1){
    if(obj1[keys]> 1){
      count ++;
    }
  }
  
  return count;
}

assert(stringCounter("abab") === 2, "wrongly counted")
