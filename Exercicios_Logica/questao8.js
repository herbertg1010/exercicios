/*
Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas, imprima na tela o nome do aluno e se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7.
*/

let nome = window.prompt('Digite seu nome:')
let nota1 = Number(window.prompt('Digite a nota1:'))
let nota2 = Number(window.prompt('Digite a nota2:'))
let nota3 = Number(window.prompt('Digite a nota3:'))
let nota4 = Number(window.prompt('Digite a nota4:'))
let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7){
    window.alert(`O aluno ${nome} tem média ${media.toFixed(1).replace('.',',')} e está APROVADO`)
}else{
    window.alert(`O aluno ${nome.toUpperCase()} tem media ${media.toFixed(1).replace('.',',')} e está REPROVADO`)
}
