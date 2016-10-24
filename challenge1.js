//your code here!

//challanges

/*Question1: (1:49 PM -1:53 PM)Write a function called billTotal that can be used to calculate
 the total to be paid at a restaurant -- including tip and tax -- given the subtotal 
 (i.e. cost of food and drinks). We can assume that the tip will be 15% and tax will be 9.5%.
  Make sure that the tip does not include the tax!*/

function billTotal(cost){
	var tip = 0.15*cost;
	var tax = (0.095*(tip+cost));
	return (tax+cost+tip);
}
billTotal(100);

/*Question 2:(1:55 PM  -1:59 PM) Implement the function called animalNoise that accepts two parameters
: a type of animal and an emotion that indicates that animal's current emotional state. Based on the 
combination of animal and emotion, animalNoise should return an appropriate noise (represented as a string).
 The function should work with at least two different animals and emotions.*/

function animalNoise(animal, emotion){
	if(animal ==="cat" && emotion ==="angry"){
		return "MEOW"
	}
}
animalNoise("cat", "angry")


/*Question 3: (2:00 PM -2:07 PM) The digital sum of a number is the sum of all its digits, e.g. digitalSum(1337)
 should output 14: 1 + 3 + 3 + 7. Use any of the methods of reptition that we have covered so far to implement this function.*/

//Recurssion
function digitalSum(n) {
  // TODO: your code here
  if (n=== 0){
  	return 0;
  }
 return n %10 +(digitalSum(Math.floor(n/10)));
}

digitalSum(8);



//While loop
function digitalSum(n) {
  // TODO: your code here
  var sum =0;
  while(n >0){
  	sum+= n%10;
  	n=Math.floor(n/10);
  	
  }
  return sum;
}

digitalSum(147);
