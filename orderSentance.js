let test1 = "is2 Thi1s T4est 3a"
let test2 = "4of Fo1r pe6ople g3ood th5e the2"


const order = (words) => {
    words = words.split(' ');
    let sorted = [];
    for(let i = 1; i <= words.length; i++) {
      words.forEach(word => {
        if (word.includes(i)) {
          sorted.push(word);
        }
      })
    }
    return sorted.join(' ');
  }

  console.log(order(test1))
  console.log(order(test2))