// 4. Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada

const listaDeMercado = [
  {
    nome: 'Maçã',
    comprado: true
  },
  {
    nome: 'Chamyto',
    comprado: false
  },
  {
    nome: 'Nutella',
    comprado: false
  },
  {
    nome: 'Sorvete',
    comprado: true
  },
  {
    nome: 'Suco',
    comprado: false
  }
]
/*
// Primeira forma:
function lista(obj) {
  for(let i = 0; i < obj.length; i++) {
    let item = obj[i]
    if(item.comprado === true) {
      console.log(item.nome)
    }
  }
}

lista(listaDeMercado)*/

// Segunda forma:
function filtrarItems() {
  const novaLista = listaDeMercado.filter(function (lista) {
    return lista.comprado === true
  })
  console.log(novaLista.nome)
}

filtrarItems()