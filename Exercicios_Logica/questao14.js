/*
Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento.
*/

let ano_nascimento = Number.parseInt(window.prompt('Digite o ano do seu nascimento!'))
let ano_atual = 2023
let idade = ano_atual - ano_nascimento

if(idade < 18){
let ano_falta = 18 - idade
    window.prompt(` Vão faltar ${ano_falta} anos`)
}else{
    let ano_passou = idade - 18
    window.prompt(`Já se passaram ${ano_passou} anos`)
}








