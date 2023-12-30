function printPattern(n) {
    let pattern = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let cellValue = 0;
            if (i % 2 == 0) {
                cellValue = (n * i) + j + 1;
            } else {
                cellValue = (n * (i + 1)) - j;
            }
            pattern += cellValue + " ";
        }
        pattern += "\n";
    }
    return pattern;
}
console.log(printPattern(3));