//create the three variables needed to test the function
const budget = 50;
const gift1 = 20;
const gift2 = 25;
// Define a function that returns the sum of the two prices before tax.
function sumOfGifts(gift1, gift2){
    return gift1 + gift2;

}

//Invoke the sumOfGifts function with the price1 and price2 variables. Store the return of this function in a new variable labeled giftTotal.
const giftTotal = sumOfGifts(gift1, gift2);


// Define a function that returns the cost of the giftTotal with tax (8 percent).
function addTax(giftTotal){
    return giftTotal + (giftTotal * 0.08);
}

// Invoke the addTax function by passing in the giftTotal variable. Store the return of this function in a new variable labeled giftsWithTax.
const giftsWithTax = addTax(giftTotal);

//Define a function that compares giftsWithTax and the budget variable. The function should return true if the budget is greater than or equal to giftsWithTax.
function holidayShopping(budget, giftsWithTax) {
    return budget >= giftsWithTax;
}

console.log(holidayShopping);