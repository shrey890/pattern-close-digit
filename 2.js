const rows = 4;
let pattern = [];
for (let i = 0; i < rows; i++) {
    pattern[i] = [];
    pattern[i][0] = 1;
    for (let j = 1; j <= i; j++) {
        if (j === i) {
            pattern[i][j] = 1;
        } else {
            pattern[i][j] = pattern[i - 1][j - 1] + pattern[i - 1][j];
        }
    }
    let row = " ";
    for (let j = 0; j <= i; j++) {
        row += pattern[i][j] + " ";
    }
    console.log(row);
}
