/*EX 7.2 Write a recursive definition of xy (x raised to the power y), where
x and y are integers and y > 0.*/


public class YourClassNameHere {
	    public static void main(String[] args) {
	      int x=3;
	      int y =7;
	      int result = power(x,y);
	      
	
	    }
	    
	    public static int power(int x, int y){
	      if(y==1){
	        return x;
	      }
	      else{
	        return x*power(x,y-1);
	      }
	    }
	}

/* EX 7.3 Write a recursive definition of i * j (integer multiplication), where
i > 0. Define the multiplication process in terms of integer addition.
For example, 4 * 7 is equal to 7 added to itself 4 times.*/
public class YourClassNameHere {
	    public static void main(String[] args) {
	      int x=4;
	      int y =7;
	      int result = multiply(x,y);
	      
	
	    }
	    
	    public static int multiply(int x, int y){
	      if(y==1){
	        return x;
	      }
	      else{
	        return x+multiply(x,y-1);
	      }
	    }
	}

/*EX 7.4 Write a recursive definition of the Fibonacci numbers, a sequence
of integers, each of which is the sum of the previous two numbers.
The first two numbers in the sequence are 0 and 1. Explain why
you would not normally use recursion to solve this problem.*/
public class YourClassNameHere {
	    public static void main(String[] args) {
	      int x =7;
	      int result = fibo(x);
	      
	
	    }
	    
	    public static int fibo(int x){
	      if(x==1){
	        return 1;
	      }
	      if(x==2){
	        return 1;
	      }
	      else{
	        return (fibo(x-1)+ fibo(x-2));
	      }
	    }
	}

//Iteration

public static int fibonacci2(int number){
 if(number == 1 || number == 2){
  return 1; 
  } 
  int fibo1=1, fibo2=1, fibonacci=1; 
  for(int i= 3; i<= number; i++){ 
  //Fibonacci number is sum of previous two Fibonacci number 
  fibonacci = fibo1 + fibo2; 
  fibo1 = fibo2;
   fibo2 = fibonacci;
    } 
    return fibonacci; //Fibonacci number 
} 

/*EX 7.5 Modify the method that calculates the sum of the integers between
1 and N shown in this chapter. Have the new version match the
following recursive definition: The sum of 1 to N is the sum of 1
to (N/2) plus the sum of (N/2 + 1) to N. Trace your solution using
an N of 7.*/

function sum (num) {
  var result;
  if (num ===1) {
  result= num; 
  }
  else { 
    var half = Math.floor(num/2); 
    var span = num - half; // span is used to "shift" upper range 
    result=(sum(half) + sum(span)+(half * span) ); 
    } 
    return result
}

sum(6)

/* EX 7.6 Write a recursive method that returns the value of N! (N factorial)
using the definition given in this chapter. Explain why you would
not normally use recursion to solve this problem.*/

public class YourClassNameHere {
	    public static void main(String[] args) {
	      int x =4;
	      int result = factorial(x);
	      
	
	    }
	    
	    public static int factorial(int x){
	      if(x== 1){
	        
	        return 1;
	      }
	      
	      
	      else{
	        return x* factorial(x-1);
	      }
	    }
	}


/*EX 7.7 Write a recursive method to reverse a string. Explain why you
would not normally use recursion to solve this problem.*/



public class YourClassNameHere {
	    public static void main(String[] args) {
	      String  x ="mahima";
	      String result = reversestring(x);
	     
	    }
	    
	    public static String reversestring(String x){
	      if(x.length() ==0){
	        return "";
	      }
	      else{
	        return reversestring(x.substring(1)) + x.charAt(0);
	      }
	     
	    }
	}



