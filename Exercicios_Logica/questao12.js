/*
Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade 
dela e depois mostre se ela pode ou não votar.
*/

let ano_nascimento = Number(window.prompt('Digite o ano que você nasceu.'))
let ano_atual = Number(window.prompt('Digite o ano atual que você está'))
let idade = ano_atual - ano_nascimento

if(idade >= 18){
    window.alert('Você pode votar SIM!! :)')
}else{
    window.alert('Você NÃO pode votar!! :(')
} 



