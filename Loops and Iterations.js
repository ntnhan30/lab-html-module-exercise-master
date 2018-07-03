// for (var i=1; i<=50; i++){
//   if ((i-1)%7===0 & i!==1) {continue}
//   else if (i%10==0 ||i%15==0)
//   console.log('Donkey!');
//   else if (i%2!==0 & (i-1)%10==0& i!==1)
//   console.log ('Monkey!');
//   else console.log(i);
// }


// Basic Data Types: Arrays
//ForEach Exercise

// var favFood = ["mat", "Cut", "tg","can", "than", "hon"];
// favFood.forEach (function (i) {
//   if (favFood.indexOf(i)%2==0)
//    console.log(i);
// });

//Exercise: Common Array Operations
//Sum the Numbers

// var sum = 0;
// var numbers = [2, 3, 6, 1, 7, 10];
// for(var i=0; i<numbers.length;i++){
//  sum += numbers[i];
// }
// console.log(sum);
// var average = sum/numbers.length;
// console.log(average);

// var currentLargest = null;
// var numbers = [10, 16, 99, 0, 52, 41, 7];
// for(var i=0; i<numbers.length;i++){
//  if (numbers[i]>currentLargest) 
//  {currentLargest= numbers[i]}
// }
// console.log(currentLargest);


//Functions
//Exercise

function addNumbers (a,b){
  return a+b;
  }
// var i= addNumbers (1,2);
// console.log(i);

function subtractNumbers (a,b) {
  return a-b;
}
// var i= subtractNumbers (5,1);
// console.log(i);

function multiplyNumbers (a,b) {
  return a*b;
}
// var i= multiplyNumbers (5,3);
// console.log(i);

// function divideNumbers (a,b) {
//   return a/b;
// }
// var i= divideNumbers (5,3);
// console.log(i);

function calculator (a,b, operation ) {
   if (operation = "addition")
     addNumbers(a,b );
   else if (operation = "subtraction")
    subtractNumbers(a,b );
  else if (operation = "multiplication")
    multiplyNumbers(a,b);
  else if (operation = "division")
    divideNumbers(a,b);
}
 var i= calculator (5,3,"division");
 console.log(i);
