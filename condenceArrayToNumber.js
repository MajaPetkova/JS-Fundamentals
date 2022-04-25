function solve(arr) {
    while (arr.length > 1) {
        let condenced = [];
        for (let i = 0; i < arr.length - 1; i++) {
            let num1 = arr[i];
            let num2 = arr[i + 1];
            let sum = num1 + num2;
            condenced.push(sum);
        }
        arr = condenced;
    }
    console.log(arr[0])
}
solve([2, 10, 3])