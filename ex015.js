var x = [5, 8, 9, 2, 3]

console.log('Nosso vetor é ' + x)
console.log('O vetor tem ' + x.length + ' posições')
console.log('O vetor ordenado é: ' + x.sort())

/*var c=0
do {
    console.log('0'+ c +')' + x[c])
    c ++ 
} while (c<x.length) 
 */

for (var c in x) {
    console.log(x[c])
}