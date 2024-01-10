/*
Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba 
o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
*/

let velocidade = Number.parseFloat(window.prompt('Qual a velocidade do seu carro? (Km/h)'))

if (velocidade > 80) {
    let excessoVelocidade = velocidade - 80
    let multa = 5 * excessoVelocidade
    window.alert(`Você foi multado! O valor da multa é R$${multa.toFixed(2)}`)
} else {
    window.alert('Você está dentro do limite de velocidade. Não há multa.')
}


















