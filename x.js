const rows = 4;
let x = [];
for (let i = 0; i < rows; i++) {
    x[i] = [];
    x[i][0] = 1;
    for (let j = 1; j <= i; j++) {
        if (j === i) {
            x[i][j] = 1;
        } else {
            x[i][j] = x[i - 1][j - 1] + x[i - 1][j];
        }
    }
    let row = " ";
    for (let j = 0; j <= i; j++) {
        row += x[i][j] + " ";
    }
    console.log(row);
}
