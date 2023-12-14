const dinner ={
    hamburger: 12 , steak: 20, soup: 8 , macncheese: 14 , soupnsalad: 16,
};

const prices = Object.values(dinner);
let totalCost = 0;
for (let i = 0; i < prices.length; i++) {
    totalCost += prices[i];
}

console.log(totalCost);