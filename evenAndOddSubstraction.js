function solve(arr) {
    let sumOdd = 0;
    let sumEven = 0;
    for (let num of arr) {

        if (num % 2 === 0) {
            sumEven += num
        } else {
            sumOdd += num
        }
    }
    let difference = sumEven - sumOdd;
    console.log(difference)
}
solve(["1 ", "2", "3", "4", "5", "6"])