function equalArrays(arr1, arr2) {
    let arrL = arr1.length;
    let isIdentical = true;
    let sum = 0;
    for (let i = 0; i < arrL; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            isIdentical = false;
            break;
        }
    }
    if (isIdentical) {
        for (let unparsed of arr1) {
            sum += Number(unparsed)
        }
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30'])