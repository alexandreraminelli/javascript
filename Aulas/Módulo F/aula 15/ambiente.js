let num = [2, 3, 49, 5, 8, 70]

num.push(3)
num.sort()
console.log(num)
console.log(`Nosso vetor é o ${num}. Ele tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
//Buscar valor
let pos = num.indexOf(8)
if (pos == -1) {
  console.log("O valor não foi encontrado!")
} else {
  console.log(`O valor 8 está na posição ${3}`)
}
