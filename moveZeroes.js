let test1 = [false,1,0,1,2,0,1,3,"a"]


const moveZeros = (arr) => {
    let zeroes = [];
    arr = arr.filter(item => {
        if (item !== 0) {
            return true;
        } else {
            zeroes.push(item);
        }
    })
    return [...arr, ...zeroes];
}

console.log(moveZeros(test1));