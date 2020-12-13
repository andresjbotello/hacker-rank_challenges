let arr = [[ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ]]

const diagonalDifference = (array) => {
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < array.length; i++) {
          sumLeft += array[i][i];
          sumRight += array[array.length - i - 1][i];
    }
    return Math.abs(sumLeft - sumRight);
}

let res = diagonalDifference(arr);
console.log(res);