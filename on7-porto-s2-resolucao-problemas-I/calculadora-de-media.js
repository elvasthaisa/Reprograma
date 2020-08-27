const input = require('readline-sync')

const nota1 = input.question('Insira a primeira nota: ')
const nota2 = input.question('Insira a segunda nota: ')
const nota3 = input.question('Insira a terceira nota: ')
const nota4 = input.question('Insira a quarta nota: ')
const nota5 = input.question('Insira a quinta nota: ')
const nota6 = input.question('Insira a sexta nota: ')

const soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6)

const media = soma / 6
const resultado = media.toFixed(2)

console.log(resultado)

if(media >= 7) {
    console.log('Parabéns, você foi aprovada!')
} else if (media < 7 && media >= 5) {
    console.log('Você foi para a recuperação')
} else {
    console.log('Você foi reprovada!')
}

