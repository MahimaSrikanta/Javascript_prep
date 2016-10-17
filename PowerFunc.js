/* Question: Write a power function that accepts the parameters base
 and exponent and returns the result. Replace square and cube with the 
 power function you just wrote. Do not use Math.pow.

 Answer */

 function power(base,exponent){
    var value =1;
    for(i =0; i<exponent; i++){
        value *=base;
        
    }
    return value;
}

power(3,3);