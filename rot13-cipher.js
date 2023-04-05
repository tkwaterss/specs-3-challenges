//create ceasar cipher with a shift of 13 places
//ensure it is case sensitive

const rot13 = (message) => {
  let lowerCheck = /[a-z]/;
  let capCheck = /[A-Z]/;
  return message
    .split("")
    .map((letter) => {
      if (lowerCheck.test(letter)) {
        let result = letter.charCodeAt(0) + 13;
        result > 122 ? (result = result - 26) : result;
        return String.fromCharCode(result);
      } else if (capCheck.test(letter)) {
        let result = letter.charCodeAt(0) + 13;
        result > 90 ? (result = result - 26) : result;
        return String.fromCharCode(result);
      } else {
        return letter;
      }
    })
    .join("");
};

console.log(rot13("Test"));

// let char = 'Z'
// console.log(char.charCodeAt(0))
