/*
Faça um algoritmo que pergunte a distância que um passageiro deseja
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
viagens até 200Km e R$0.45 para viagens mais longas.
*/

var distancia = parseFloat(prompt("Digite a distância da viagem em Km:"))


var precoPorKm

if (distancia <= 200) {
    precoPorKm = 0.50
} else {
    precoPorKm = 0.45
}

var precoTotal = distancia * precoPorKm

console.log("A distância da viagem é: " + distancia + " Km")
console.log("O preço da passagem é: R$" + precoTotal.toFixed(2))














