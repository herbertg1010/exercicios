/*
Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.
*/

let salario = Number.parseFloat(window.prompt('Qual o valor do seu salário??'))
let aumento = salario * (15/100)
let novosalario = salario + aumento

window.alert(`O salário de ${salario.toFixed(2).replace('.',',')} reais teve um aumento de 15% e passou a ser ${novosalario.toFixed(2).replace('.',',')} reais!!`)
