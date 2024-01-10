/*
O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
indivíduo dentro de certas faixas.
- abaixo de 18.5: Abaixo do peso
- entre 18.5 e 25: Peso ideal
- entre 25 e 30: Sobrepeso
- entre 30 e 40: Obesidade
- acima de 40: Obseidade mórbida
Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado
da altura)
*/

let altura = Number.parseFloat(window.prompt('Qual a sua altura??'))
let peso = Number.parseFloat(window.prompt('Qual o seu peso (Kg)?'))
let imc = peso / (altura ** 2)
console.log(`Altura: ${altura.toFixed(2).replace('.',',')}`)
console.log(`Peso: ${peso.toFixed(0).replace('.',',')}`)
console.log(`IMC: ${imc.toFixed(2).replace('.',',')}`)
if(imc < 18.5){
    console.log('Abaixo do peso')
}else if(imc >= 18.5 && imc < 25){
    console.log('Peso ideal')
} else if(imc >= 25 && imc < 30){
    console.log('Sobrepeso')
}else if(imc >= 30 && imc < 40){
    console.log('Obesidade')
}else{
    console.log('Obesidade mórbida')
}












