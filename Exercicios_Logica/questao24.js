/*
Uma empresa precisa reajustar o salário dos seus funcionários, dando um
aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
No final, mostre o seu novo salário, baseado na tabela a seguir:
- Mulheres
- menos de 15 anos de empresa: +5%
- de 15 até 20 anos de empresa: +12%
- mais de 20 anos de empresa: +23%
- Homens
- menos de 20 anos de empresa: +3%
- de 20 até 30 anos de empresa: +13%
- mais de 30 anos de empresa: +25%
*/


let salario = Number.parseFloat(window.prompt('Digite seu salário...'))
let genero = window.prompt('Digite seu sexo...')
let anos = Number.parseInt(window.prompt('Digite quantos anos você trabalha na empresa...'))

if(genero === 'Feminino' && anos < 15){
    let aumento =  salario * (5/100)
    let novosalario = salario + aumento
    console.log(`O novo salário será: ${novosalario}`)
}else if(genero === 'Feminino' && anos >= 15 && anos < 20){
    let aumento =  salario * (12/100)
    let novosalario = salario + aumento
    console.log(`O novo salário será: ${novosalario}`)
}else if(genero === 'Feminino' && anos >=20){
    let aumento =  salario * (23/100)
    let novosalario = salario + aumento
    console.log(`O novo salário será: ${novosalario}`)
}

if(genero === 'Masculino' && anos < 20){
    let aumento = salario * (3/100)
    let novosalario = salario + aumento
    console.log(`O novo salário será: ${novosalario}`)
}else if(genero === 'Masculino' && anos >= 20 && anos < 30){
    let aumento = salario * (13/100)
    let novosalario = salario + aumento
    console.log(`O novo salário será: ${novosalario}`)
}else{
    let aumento = salario * (25/100)
    let novosalario = salario + aumento
    console.log(`O novo salário será: ${novosalario}`)
}



