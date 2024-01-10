/*
Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm
*/

let distancia = Number.parseFloat(window.prompt('Digite a distancia em metros'))
let cm = distancia * 100
let km = distancia / 0.001

console.log(`O valor da distância em metros é: ${distancia}`)
console.log(`O valor da distância em cm é: ${cm.toFixed(2).replace('.',',')}`)
console.log(`O valor da distância em km é: ${km.toFixed(2).replace('.',',')}`)














