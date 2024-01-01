let n = 4
let x = ''
for (let i = 1; i <= n; i++) {
    // console.log(i)
    for (let j = 1; j <= n - i; j++) {
        console.log(n)
        console.log('after N')
        console.log(i)
        console.log('after I')
        console.log(j)
        console.log('after J')
        x += " "
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        x += "*"
    }
    x += ' \n'
}
console.log(x)