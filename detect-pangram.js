let test1 = "The quick brown fox jumps over the lazy dog";
let test2 = "this is not a pangram";

const isPangram = (string) => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return alphabet.every(letter => string.includes(letter)) ? 'This is a pangram' : 'This is not a pangram'
  }

console.log(isPangram(test1))
console.log(isPangram(test2))

const checkPangram = (string) => {
    regEx = /^[a-z]/ig
    
}