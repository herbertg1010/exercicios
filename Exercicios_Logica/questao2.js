// Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar
var numero = Number(window.prompt('Digite um número qualquer:'))
if(numero % 2 == 0){
   window.alert(`O número ${numero} é par`)
}else{
    window.alert(`O número ${numero} é ímpar`)
}