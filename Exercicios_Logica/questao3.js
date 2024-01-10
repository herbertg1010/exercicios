/*
Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, 
caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.
*/

var a =  Number.parseInt(window.prompt('Digite o valor de A:'))
var b = Number.parseInt(window.prompt('Digite o valor de B:'))
var c = 0
if(a == b){
    var soma = a + b
    c = soma
    window.alert(`O valor de C é : ${c}`)
}else{
    var multi = a * b
    c = multi
    window.alert(`O valor de C é : ${c}`)
}





