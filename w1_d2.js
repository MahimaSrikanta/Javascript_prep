//Excersise 2  conditions: if 
function bouncer(name, age){
    if(age >= 18){
        return "Welcome "+ name;
    }
    else{
        return "Go home, "+ name;
    }
}
bouncer("Hello", 18);



function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/*
More Practice Question3*/

function randInt(n){
    return Math.floor((Math.random()*n))+1;
}

randInt(5);


/*Question: 
guessMyNumber: Should accept a single numeric argument and
compare it to a random number between 0 and 5.
It should return one of the following strings:
*/

function guessMyNumber(n){
    random_value = Math.floor(Math.random()*5);
    if(n === random_value){
        return "You guessed my number!";
    }
    else{
        return "Nope! That wasn't it!" + random_value ;
    }
}
guessMyNumber(5);


/*
Ex: 3
Question: This guy named "Joe" keeps
blacking out at the bar that your function
*/
function bouncer(name, age){
    if(name.toLowerCase() === "joe" || age < 18){
        return "Go home, "+ name;
    }
    else {
        return "welcome " + name;
    }
}
bouncer("J", 18);

/*
Ex: 3
Question: Write a function called scoreToGrade that
accepts a number as a parameter and returns a string 
representing a letter grade corresponding to that score.
*/

function scoreToGrade(number){
    if( number > 100 || number < 0){
        return "invalid";
    }
    if(number > 90){
        return 'A';
    }
    else if (number >= 80){
        return 'B';
    }
    else if (number >= 70){
        return 'c';
    }
    else if (number >= 60){
        return 'd';
    }
    else{
        return "fail";
    }
}
scoreToGrade(15);

/*
Advanced
Ex: 3.2
Question: Write a function called scoreToGrade that
accepts a number as a parameter and returns a string 
representing a letter grade corresponding to that score.
*/
function gradesign(grade, number){
    var digit = number.toString()[1];
    
    if(parseInt(digit) >=8 ||(number=== 100)){
        return '+';
    }
    else if(parseInt(digit) >=3){
        return '';
    }
    else{
        return '-';
    }
    
}

function scoreToGrade(number){
    if( number > 100 || number < 0){
        return "invalid";
    }
    if(number >= 90){
        return 'A' + gradesign('A', number);
    }
    else if (number >= 80){
        return 'B' + gradesign('B', number);
    }
    else if (number >= 70){
        return 'C'+ gradesign('C', number);
    }
    else if (number >= 60){
        return  'D'+ gradesign('D', number);
    }
    else{
        return "fail";
    }
}
scoreToGrade(70);



/*
Advanced Question 3.1: The bar that employs our bouncer function
has decided to do live music on Friday and Saturday nights,nd will
be admitting those that are over 18 to the bar on those nights; the catch however
, is that all who are 21 or older will need to be given a wristband to distinguish them from the minors
*/
function bouncer(age){
    if (age >= 18 && age < 21 ){
        console.log("allowed but no wristband");
        
    }
    else if (age <18){
         console.log("Not allowed");
    }
    else if (age > 21){
        console.log("allowed with wristband");
    }
}

bouncer(22);

/* question 3.3: 
Write a function or that works like ||, but only uses ! and &&.
*/

function or(value1, value2){
    var negateValue1= !value1;
    var negateValue2= !value2;
    return !(negateValue1 && negateValue2 )
    
}

or(true,false);
or(false,false);
or(true,true);

/*
Write a function and that works like &&, but only uses ! and ||.
*/


function and(value1, value2){
    var negateValue1= !value1;
    var negateValue2= !value2;
    return !(negateValue1 || negateValue2 );
    
}

and(false, false);