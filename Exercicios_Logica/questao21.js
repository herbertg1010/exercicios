/*
Desenvolva um programa que leia o nome de um funcionário, seu salário,
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
acordo com a tabela a seguir:
- Até 3 anos de empresa: aumento de 3%
- entre 3 e 10 anos: aumento de 12.5%
- 10 anos ou mais: aumento de 20%
*/

let nome = window.prompt('Digite o seu nome...')
let salario = Number.parseFloat(window.prompt('Digite o seu salario...'))
let anos = Number.parseInt(window.prompt('Digite quantos anos...'))

if(anos < 3){
    let aumento = salario * (3/100)
    let novosalario = salario + aumento
    console.log(`O novo salário é: ${novosalario}`)
}else if(anos >= 3 && anos < 10){
    let aumento = salario * (12.5/100)
    let novosalario = salario + aumento
    console.log(`O novo salário é: ${novosalario}`)
} else if(anos >= 10){
    let aumento = salario * (20/100)
    let novosalario = salario + aumento
    console.log(`O novo salário é: ${novosalario}`)
}



















