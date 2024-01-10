/*
Escreva um programa para aprovar ou não o empréstimo bancário para a compra
de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
ela não pode exceder 30% do salário ou então o empréstimo será negado.
*/


let valor_casa = Number.parseFloat(window.prompt('Qual o valor da sua casa??'))
let salario = Number.parseFloat(window.prompt('Qual o valor do seu salário??'))
let anos = Number.parseInt(window.prompt('Quantos anos você vai pagar'))

let prestacao = valor_casa / (anos * 12)


if(prestacao <= (30/100) * salario){
    console.log(`Empréstimo aprovado! A prestação mensal será de ${prestacao.toFixed(2).replace('.',',')} reais`)
}else{
    console.log(`O empréstimo será negado!!`)
}











