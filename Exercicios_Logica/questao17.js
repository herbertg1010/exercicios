/*
A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.
*/


let km = Number.parseFloat(window.prompt('Digite a quantidade de Km percorridos:'))
let dias = Number.parseInt(window.prompt('Digite a quantidade de dias pelos quais o carro foi alugado'))

let preco_total = (90 * dias) + (0.20 * km)
console.log(`O preço total a se pagar no aluguel do carro é: ${preco_total} reais`)






