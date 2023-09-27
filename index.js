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


var vowels = ["a","e","i","o","u"]
const inputArr = "awesome"

let vowelcount = 0
let conscount = 0

for (const char of inputArr){
    if (vowels.includes(char)){
        vowelcount++
    }
    else conscount++;
}

console.log(inputArr,"has",vowelcount, "vowels and", conscount, "consonants" );
