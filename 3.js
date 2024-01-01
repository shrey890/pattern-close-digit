let n = 4
let x = ''
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === 1 || j === 1 || j === n || i === n) {
            x += '*'
        } else {
            x += ' '
        }
    }
    x += '\n'
}
console.log(x)

