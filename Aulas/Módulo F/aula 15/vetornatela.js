//Simplificação tradicional
console.log("Simplificação tradicional:")

let valores1 = [9, 84, 82, 358, 295, 29, 59]
valores1.sort()

for (let pos = 0; pos < valores1.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores1[pos]}`)
}
//Separação
console.log("---------------------------------------------------------------------------")

//Forma mais moderna
console.log("Forma mais moderna:")

let valores2 = [54, 643, 64, 2, 46, 7, 4, 1]
valores2.sort()

for (let pos in valores2) {
  console.log(`A posição ${pos} tem o valor ${valores2[pos]}`)
}
