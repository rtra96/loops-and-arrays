// ----------only odds---------------------------
// create an array with the values from "input arrays"
// loop through the array to pick out the numbers that are divisible by 2 and log to the console

// const numbers = [ 2,4,6,8,10,11,12,];

// const odds = [];
// for (const num of numbers) {
//     if (num % 2 === 1) {
//         odds.push(num);
//     }
// }
// console.log(odds);

//---------Vowel vs Consonant--------------
//create two variables, one for vowels and one for consonants
//enter each input as a string in an array, and loop through to find which letters in the string belong to which variable
// a console log that prints the array string + has "x of variable 1" and "x of variable 2"


// var vowels = ["a","e","i","o","u"]
// const inputArr = "awesome"

// let vowelcount = 0
// let conscount = 0

// for (const char of inputArr){
//     if (vowels.includes(char)){
//         vowelcount++
//     }
//     else conscount++;
// }

// console.log(inputArr,"has",vowelcount, "vowels and", conscount, "consonants" );


//-------Reverse Array---------------
// create an array for the forwards values
//create an empty array for the backwards values
// create a variable to manipulate
// count through the for loop to determine the index

// function reverseArray(inputArray) {
//     var reversedArray = [];
  
//     for (var i = inputArray.length - 1; i >= 0; i--) {
//       reversedArray.push(inputArray[i]);
//     }
  
//     return reversedArray;
//   }
  
//   // Test cases
//   var array1 = [1, 2, 3];
//   var array2 = [1, 3, 5, 7, 9, 11];
//   var array3 = [20, 50, 30, 60, 200];
//   var array4 = [1, -1, 2, -3, 5, -8, 13];
  
//   console.log(reverseArray(array1)); 
//   console.log(reverseArray(array2)); 
//   console.log(reverseArray(array3)); 
//   console.log(reverseArray(array4)); 

//------FIZZBUZZ-------
//create a for loop that covers numbers 1-100
//use conditionals to determine which numbers are multiples of 3 , 5 or both
//log out the corrosponding inputs

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }