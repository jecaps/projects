/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  let romanNum = "";
  let roman = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  while (num != 0) {
    for (let [key, value] of Object.entries(roman).reverse()) {
      if (num >= key) {
        num -= key;
        romanNum += value;
        break;
      }
    }
  }
  return romanNum;
}

console.log(convertToRoman(36));
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(3999));
console.log(convertToRoman(2014));
