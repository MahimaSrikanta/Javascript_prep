/************** warm-ups *******************/
function assert(exp,des){
  if(exp){
    console.log("test passed");
  }
  else{
    console.log(des);
  }
}
//1
function generateZeroToTwenty(){
  for(var i=0; i<=20; i++){
    console.log(i);
  }
}
//generateZeroToTwenty();

//2
function generateTwentyToZero(){
  for(var i =20; i>=0; i--){
    console.log(i);
  }
}
//generateTwentyToZero()

//3
function generateTwentyToZero(){
  var result=[];
  for(var i =0; i<= 20; i++){
    if(i%2===0){
      result.push(i);
    }
  }
  return result;
}
generateTwentyToZero();

//4
function multiplyByNine(array){
  var result =[];
  for(var i=0;i<array.length;i++){
    result.push([array[i], array[i]*9]);
  }
  return result;
}
multiplyByNine([1,2,3]);

//5
function sumArrays(arr1, arr2){
  return arr1.map(function(item, index){
    return item+arr2[index];
  });
}
assert(JSON.stringify(sumArrays([1,2,3],[4,5,6])) === JSON.stringify([5,7,9]),"wrong result");


//6
function maxValue(array){
  return array.reduce(function(acc,curr){
    if(curr> acc){
      return curr;
    }
    else{
      return acc;
    }
  });
}

assert(maxValue([3,4,1,8])=== 8, "wrong result");

//7
function average(array){
  
  return array.reduce(function(acc, curr){
    return acc +curr;
  })/array.length;
}

assert(average([1,2,3])=== 2, "wrong result");

//8
function alter(array){
  return array.reduce(function(acc,curr,index){
    if(index %2===0){
      return acc-curr;
    }
    else{
      return acc+curr;
    }
  });
}

assert(alter([1,2,3,4,5])=== -1, "wrong result");

//9
function asteriks(num){
  var result="";
  for(var i=0;i<num; i++){
    result+="*";
  }
  return result;
}
asteriks(4);

//10
function triangle(){

  for(var i =1;i<7;i++){
    var result="";
    for(var j=0;j<i;j++){
      result +="#";
    }
    console.log(result);
   }
}

triangle();

//11
function animals(obj){
  var result=[];
  for(keys in obj){
    result.push(obj[keys][0]);
  }
  return result;
}
var animal = { 
mammals:['bears','lions','whales','otters'], 
birds:['penguins','ducks','swans','chickens'], 
cats:['panther','mountain lion','leopard','snow tiger'], 
insects: ['flea','mosquito','beetle','fly','grasshopper']
}
animals(animal);

//12
function fizzbuzz(){
  var result ={0:0};
  for (var i =1;i<25;i++){
    if(i%15 ===0){
      result[i]= "fizzbuzz";
    }
    else if(i%5 ===0){
      result[i]="Buzz";
    }
    else if(i%3 ===0){
      result[i]="Fizz";
    }
    else{
      result[i]=i;
    }
  }
  return result;
}

fizzbuzz();

//13
function organize(array){
  var euro={};
  var pence={};
  var result=[];
  array.forEach(function(currency){
    if(currency.slice(-1)==='p'){
      if(pence[currency] === undefined){
        pence[currency]=1;
      }
      else{
         pence[currency]=pence[currency]+1;
      }
    }
    else {
      if(euro[currency]=== undefined){
        euro[currency]=1;
      }
      else{
       euro[currency]=euro[currency]+1;
      }
    }
  });
  result.push(pence,euro);
  return result;
}
var curr=['1p','2p','5p', '5p','10p','20p','50p','£1', '20p','50p','£1','£2'];
organize(curr);

/*********************** Prooblems ***************************/
//1
var callers=['Aaron Aves',
'Alex Duda',
'Colton Jett',
'Elliott Birch',
'Jamin Ewell',
'Jane Vaden',
'Jared Cairns',
'Jason Sierra',
'Joshua Peng',
'Nick Partridge',
'Rachel Noble',
'Richard Mathera',
'Robert Ballard',
'Sammy Icaza',
'Samy Kebaish',
'Silvia Fernandez',
'Vandeth Nop',
'Vy Trinh'];

function coldcaller(array){
  var result="";
  result= array[Math.floor(Math.random()*array.length)];
  return result;
}
coldcaller(callers);

//3
function title( string){
  var prepositions = ["about","after","against","as",'at',"between","by","for","from","in","inside","like","of","on","over","since","than","to","under","up","versus","via","with","within"];
  var result="";
  return string.split(" ").map(function(word){
    if( prepositions.includes(word.toLowerCase())){
      return word.toLowerCase();
    }
    else{
      return word[0].toUpperCase()+word.slice(1).toLowerCase();
    }
  }).join(" ");
  
}

title("hE toOk oVeR thE IssUe");

//4
function leap(num){
  var result=[];
  for (var i=2016;i<=(2016+num);i=i+4){
    result.push(i);
  }
  return result;
}
leap(300);

//5
function reverse(array){
  for(var i=0,j=array.length-1; i<=j; i++,j--){
    var temp =array[i];
    array[i]=array[j];
    array[j]=temp;
  }
  return array;
}
reverse([1,2,3,4]);

//6
function sort(array){
  for(var i=0;i<array.length;i++){
    for(var j=0;j< array.length-1;j++){
      if(array[j] > array[j+1]){
        var temp = array[j];
        array[j]= array[j+1];
        array[j+1]=temp;
      }
    }
  }
  return array;
}

sort([5,4,3,2]);

//7
function palindrome(string){
  for(var i=0,j=string.length-1;i<=j;i++,j--){
    if(string[i]!== string[j]){
      return false;
    }
    else{
      return true;
    }
  }
}

palindrome("teet");
//Int8Array
function moorse(string){
    var moorse=[
    {0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----."}
  ]
  return string.split("").map(function(letter){
    return moorse[0][parseInt(letter)];
  }).join("");
}
moorse('143')

/************************* fashion inventory **********************/
//1
var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
function flatout(inventory){
  return inventory.map(function(brand){
    return brand.shoes.map(function(shoes){
      return ([brand.name, shoes.name,shoes.price]);
    })
  }).reduce(function(acc,curr){
    return acc.concat(curr);
  }).reduce(function(acc,curr){
    return acc.concat(curr);
  });
  
}

flatout(inventory);

//2
function price(inventory){
  var expected={};
  var result=[];
  
  inventory.forEach(function(brand){
    var inner={};
    inner.name= brand.name;
    inner.averagedPrice=brand.shoes.reduce(function(acc,curr){
      return acc +curr.price;
    },0)/brand.shoes.length;
   
  result.push(inner);
  });
  
  expected.designer=result;
  return expected;
}

price(inventory)
