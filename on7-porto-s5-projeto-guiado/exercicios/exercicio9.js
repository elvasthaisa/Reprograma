// 9. Uma pessoa é representada pelo objeto pessoa. Essa pessoa tem a habilidade de comer. A string >(O)< representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: A NomeDaPessoa comeu a bala: O

const bala = ['[<O>]'];
const pessoa = {
  nome: 'Anna',
  comer(bala) {
    console.log(`${this.nome} comeu a bala: ${bala}`);
  }
}

function imprimeFrase(obj) {
  const balaStr = bala.toString()
  const semEmbalagem = balaStr.split('').filter(el => el === 'O')
  return `A ${obj.nome} comeu a bala: ${semEmbalagem}`
}

console.log(imprimeFrase(pessoa))