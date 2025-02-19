let num = [1, 4, 9, 5, 3, 2]
num.push(6)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`Nosso vetor é o ${num}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor está na posição ${pos}.`)
}
