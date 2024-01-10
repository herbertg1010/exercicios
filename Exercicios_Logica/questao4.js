/*
 Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.
*/
var n1 = Number(window.prompt('Digite um número qualquer:'))
var antecessor = n1 - 1
var sucessor = n1 + 1

window.alert(`O número ${n1} tem como antecessor ${antecessor} e sucessor ${sucessor}`)
