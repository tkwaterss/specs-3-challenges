let test1 = 'abcde fghijk'
let test2 = 'asdflkjgd !(*#% adasghl 235032';


const alphabetPosition = (text) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    text = text.toLowerCase().split('').map(item => {
        if (alphabet.includes(item)) {
            return item = alphabet.indexOf(item)
        } 
    })
    console.log(text);
    return text.join(' ');
}

console.log(alphabetPosition(test1))
console.log(alphabetPosition(test2))