/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  // let newStr = "";
  // for (let char of str) {
  //   if (/[^A-Z]/.test(char)) {
  //     newStr += char;
  //   } else {
  //     newStr += letters[letters.indexOf(char) + 13];
  //   }
  // }
  let newStr = "";
  [...str].forEach((char) =>
    /[^A-Z]/.test(char)
      ? (newStr += char)
      : (newStr += letters[letters.indexOf(char) + 13])
  );
  return newStr;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
