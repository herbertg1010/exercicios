/* Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7
*/

var h = Number.parseFloat(window.prompt('Digite sua altura:'))
var imchomens = (72.7 * h) - 58
var imcmulheres = (62.1 * h) - 44.7

document.write(`O seu peso ideal caso seja homem é: ${imchomens.toFixed(1).replace('.',',')} e caso seja mulher seu peso ideal é: ${imcmulheres.toFixed(1).replace('.',',')}`)




















