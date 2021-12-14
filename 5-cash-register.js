/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, 
as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

// let denomination = {
//   "ONE HUNDRED": 100,
//   TWENTY: 20,
//   TEN: 10,
//   FIVE: 5,
//   ONE: 1,
//   QUARTER: 0.25,
//   DIME: 0.1,
//   NICKEL: 0.05,
//   PENNY: 0.01,
// };

// let reversed = [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ].reverse();

// console.log(reversed);
// console.log(denomination);

// function checkCashRegister(price, cash, cid) {
//   let changeAmount = cash - price;
//   let changeToGive = [];
//   let denominations = {
//     "ONE HUNDRED": 100,
//     TWENTY: 20,
//     TEN: 10,
//     FIVE: 5,
//     ONE: 1,
//     QUARTER: 0.25,
//     DIME: 0.1,
//     NICKEL: 0.05,
//     PENNY: 0.01,
//   };

//   for (let [key, value] of Object.entries(denominations)) {
//     let denominationAmount = 0;
//     while (changeAmount >= value) {
//       // check if value is in drawer
//       for (let denomination of cid) {
//         if (denomination[0] == key) {
//           if (denomination[1] > 0) {
//             changeAmount -= value;
//             denominationAmount += value;
//             // update cid
//             denomination[1] -= value;
//           } else {
//             break;
//           }
//         }
//       }
//       // break;
//     }
//     if (denominationAmount > 0) {
//       changeToGive.push([key, denominationAmount]);
//     }
//     if (changeAmount == 0) {
//       break;
//     }
//   }
//   return { status: "OPEN", change: changeToGive };
// }

// console.log(
//   checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let moneyValue = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };
  let changeToGive = [];

  let moneyOnHand = Object.fromEntries(cid);

  while (change != 0) {
    for (let [amountInWords, amount] of Object.entries(moneyValue)) {
      // OPEN
      if (change >= amount) {
        if (moneyOnHand[amountInWords] != 0) {
          change = (change - amount).toFixed(2);
          console.log(change);
          moneyOnHand[amountInWords] -= amount;
          break;
        } else {
          continue;
        }
      }
    }
  }

  return changeToGive;
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
