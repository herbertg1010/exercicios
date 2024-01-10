/*Crie um programa que leia o preço de um produto, calcule e mostre o seu 
PREÇO PROMOCIONAL, com 5% de desconto.*/

let preco = Number.parseFloat(window.prompt('Digite o preço do produto:'))

let desconto = preco * (5/100)
let novopreco = preco - desconto
window.alert(`O preço do produto com 5% de desconto é: ${novopreco.toFixed(2).replace('.',',')}`)



