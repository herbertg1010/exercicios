/*
Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
para todos, mas especialmente para mulheres. Faça um programa que leia nome,
sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
que:
- Homens ganham 5% de desconto
- Mulheres ganham 13% de desconto
*/

let nome = window.prompt('Digite seu nome:')
let sexo = window.prompt('Digite seu sexo:')
let valor_compras = Number.parseFloat(window.prompt('Digite o valor das suas compras:'))

if(sexo === 'Masculino'){
let desconto = valor_compras * (5/100)
let preco_desconto = valor_compras - desconto
window.alert(`O preço do produto com desconto é:  ${preco_desconto}`)
}else{
    let aumento = valor_compras * (13/100)
    let preco_aumento = valor_compras + aumento
    window.alert(`O preço do produto com aumento é: ${preco_aumento}`)
}

document.write(`Nome: ${nome}`)
document.writeln(`Sexo: ${sexo}`)
document.writeln(`Valor das Compras: ${valor_compras}`)













