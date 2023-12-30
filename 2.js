let n = 5
let string = ''
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n; j++) {
        string += ' '
    }
    for (let k = 1; k < 1 + i - 1; k++) {
        string += '1'
    }
    string += '\n'
}
console.log(string)
