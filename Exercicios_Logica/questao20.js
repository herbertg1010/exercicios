/*
Faça um programa que leia a largura e o comprimento de um terreno
retangular, calculando e mostrando a sua área em m². O programa também
devemostrar a classificação desse terreno, de acordo com a lista abaixo:
- Abaixo de 100m² = TERRENO POPULAR
- Entre 100m² e 500m² = TERRENO MASTER
- Acima de 500m² = TERRENO VIP
*/

let largura = Number.parseFloat(window.prompt('Digite a largura do terreno...'))
let comprimento = Number.parseFloat(window.prompt('Digite o comprimento do terreno...'))
let area = largura * comprimento

console.log(`A área do terreno em m² é: ${area}`)
if(area < 100){
    console.log('TERRENO POPULAR')
} else if (area >= 100 && area <= 500){
    console.log('TERRENO MASTER')
} else if(area > 500){
    console.log('TERRENO VIP')
}










