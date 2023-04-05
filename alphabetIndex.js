let test1 = "abcde fghijk";
let test2 = "asdflkjgd !(*#% adasghl 235032";

const alphabetPosition = (text) => {
  return text
    .toLowerCase()
    .split("")
    .map((item) => {
      return (item = "abcdefghijklmnopqrstuvwxyz".indexOf(item));
    })
    .filter((element) => {
      return element !== -1;
    })
    .join(" ");
};

console.log(alphabetPosition(test1));
console.log(alphabetPosition(test2));

//One Liner for fun
const alphabetPositionOne = (text) => text.toLowerCase().split("").map((item) => item = "abcdefghijklmnopqrstuvwxyz".indexOf(item)).filter((element) => element !== -1).join(" ");