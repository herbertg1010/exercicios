/*
Crie um programa que leia duas notas de um aluno e calcule a sua média,
mostrando uma mensagem no final, de acordo com a média atingida:
- Média até 4.9: REPROVADO
- Média entre 5.0 e 6.9: RECUPERAÇÃO
- Média 7.0 ou superior: APROVADO
*/

let nota1 = Number.parseFloat(window.prompt('Digite a nota 1:'))
let nota2 = Number.parseFloat(window.prompt('Digite a nota 2:'))
let media = (nota1 + nota2) / 2

if(media <= 4.9){
    window.alert('O aluno foi reprovado!!')
}else if(media >= 5.0 && media <=6.9){
    window.alert('O aluno está em recuperação!!')
} else if(media >= 7){
    window.alert('O aluno foi aprovado!!')
}
















