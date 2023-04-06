let test1 = 'man i need a taxi up to ubud'  //taxi
let test2 = 'what time are we climbing up the volcano' //volcano
let test3 = 'take me to semynak' //semynak

const high = words => {
    words = words.split(' ');
    let highScore = 0;
    let highWord = '';
    words.forEach(word => {
        let newScore = 0;
        for (let i = 0; i < word.length; i++) {
            newScore += +(word.charCodeAt(i) - 96)
        }   
        if (newScore > highScore) {
            highScore = newScore;
            highWord = word;
        }
    })
    return highWord
}


console.log(high(test1));