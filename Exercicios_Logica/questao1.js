//  Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.

var a =  Number.parseInt(window.prompt('Digite o valor de A:'))
var b = Number.parseInt(window.prompt('Digite o valor de B:'))
var c = Number.parseInt(window.prompt('Digite o valor de C:'))
var soma = a + b
window.alert(`O valor da soma entre ${a} e ${b} é ${soma} `)
if(soma < c){
    document.write(`O valor da soma que é ${soma} é menor que o valor de c que é ${c}`)
}else{
    document.write(`O valor da soma que é ${soma} é maior que o valor de c que é ${c}`)
}

