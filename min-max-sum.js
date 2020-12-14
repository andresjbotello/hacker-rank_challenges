let array = [1,2,3,4,5]

const miniMaxSum = (arr) => {
    let min = arr[0];
    let max = min;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return (sum - max) + " " + (sum - min);
}

let res = miniMaxSum(array);
console.log(res);