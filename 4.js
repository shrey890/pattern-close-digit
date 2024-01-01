const rows = 3;
let pattern = [];
for (let i = 0; i < rows; i++) {
    pattern[i] = [];
    for (let j = 0; j < rows; j++) {
        pattern[i][j] = 0;
    }
}
let num = 1;
for (let layer = 0; layer < Math.ceil(rows / 2); layer++) {
    for (let i = layer; i < rows - layer; i++) {
        pattern[layer][i] = num++;
    }
    for (let i = layer + 1; i < rows - layer; i++) {
        pattern[i][rows - layer - 1] = num++;
    }
    for (let i = rows - layer - 2; i >= layer; i--) {
        pattern[rows - layer - 1][i] = num++;
    }
    for (let i = rows - layer - 2; i > layer; i--) {
        pattern[i][layer] = num++;
    }
}
for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < rows; j++) {
        row += pattern[i][j] + " ";
    }
    console.log(row.trim());
}
