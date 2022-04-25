function sumEven(arr) {
    let sum = 0;
    for (let unparsed of arr) {
        let number = Number(unparsed);
        if (number % 2 === 0) {
            sum += number
        }
    }
    console.log(sum)

}
sumEven(["2", "4", "6", "1", "7"])