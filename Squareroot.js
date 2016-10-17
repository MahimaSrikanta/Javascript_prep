/* question: Write your own square-root function called sqrt that accepts a number 
parameter and returns an approximate square root. Square-root approximations make
use of averages. Be sure to use the average function you previously wrote. 
The first version of your square root function should perform no more than 3 successive averages.

Answer: http://www.math.com/school/subject1/lessons/S1U1L9DP.html
*/

function avg (num1, num2){
    return(num1+num2)/2;
}

function squareRoot(number){
	//The square root is always less then half of the number
  var end = avg(0,number);

  //checking  squares of all numbers from 1 to half of the number
  for(i=0;i<=end; i++){
  	//if perfect square found then return the value
    if(i*i ==number){
      return i
    }
    //else if no perfect match found then, take the nearest floor value 
    if(i*i > number){
      var ans = i-1;
      break;
    }
  }
  
  var division = number/i;
  var result= avg(division, i)
  return result
}
squareRoot(22);

//Solution 2 

function squareRoot(number){
var logValue= Math.log(number)/Math.log(10);
var floorValue = (Math.pow(10, (logValue/2)));

var division = number/floorValue;
result= avg(division,floorValue );

return result;
//return floorValue;

}
squareRoot(11);