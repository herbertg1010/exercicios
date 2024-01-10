/*
Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.
*/
var reais = Number.parseFloat(window.prompt('Digite seu valor da carteira em reais.'))
var dolar = reais / 3.45
window.alert(`O valor em dolares é ${dolar.toFixed(2).replace('.',',')}`)