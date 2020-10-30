# Banco de Dados 

![Database-image](./assets/database.png)
 
### Dados x Informações

Dados são fatos brutos, que não fazem sentido algum enquanto isolados. Já as informações são o conjunto de dados reunidos, a partir dos quais é possível realizar uma organização de modo que faça sentido e seja gerado um conhecimento.

### O que são bancos de dados?

> São uma estrutura bem organizada de dados, que representa informações sobre um domínio específico, sendo armazenados para segurança ou conferência futura.

### Tipos de bancos de dados
- Banco de dados relacionais
~~~
São comumente utilizados para dados tabulares, ou seja, os dados são armazenados em uma tabela, com linhas e atributos responsáveis por organizá-los, o que torna a inserção bem mais simples. 
Por analogia, funciona como uma tabela do Excel, em que os registros são padronizados, possuindo todos os mesmos atributos relacionados às linhas.
Ex: SQL (Structured Query Language)

Vantagens: 
- são estruturados e imutáveis
- proteção da integridade do banco de dados
~~~

- Banco de dados não-relacionais
~~~
Armazena seus dados em documentos como um array de objetos JSON, em uma única estrutura de dados. Logo, não é necessário ter uma estrutura de dados previamente definida como em uma tabela, e os dados podem ter propriedades diferentes. 
Ex: MongoDB

Vantagens: 
- maior velocidade e flexibilidade
- são mais facilmente escalados horizontalmente para acomodar grandes volumes de dados em nuvem
- não possui estrutura de dados definida. Assim, podem ser adicionadas ou retiradas propriedades conforme mudarem as necessidades, sem que isso impacte nas demais informações armazenadas.
~~~

OBS: Comparação de nomenclatura SQL x MongoDB

| SQL | MongoDB |
|-----|---------|
| Banco de Dados | Banco de Dados |
| Tabela | Coleção |
| Linha | Documento |
| Coluna | Campo |
___

## **MongoDB**
> O foco do curso será no estudo do *MongoDB*.

![MongoDB](/assets/mongodb.jpg)

### Primeiros comandos no MongoDB

Após download e instalação do MongoDB, abra o prompt de comando e digite `mongod`. Em seguida, abra um outro terminal cmd e digite `mongo`. 

> Bancos de dados (databases)
- `show databases` ou `show dbs` : Lista todos os bancos de dados
- `use [nome-do-banco]` : Seleciona um banco de dados
- `db` : Verifica qual o banco de dados que está em uso no momento
- `db.dropDatabase()` : Apaga um banco de dados
- `use terminalRoot` : Cria um banco de dados, o qual só passa a existir após ser criada uma collection e dados serem inseridos nela

> Collections
- `show collections` : Mostra as collections (não-vazias)
- `createCollection()` : Cria uma collection.
Exemplo: `db.createCollection("myCollection")`


#### Fontes:

[O que é Banco de Dados](https://rockcontent.com/br/blog/banco-de-dados/);

[Banco de Dados Relacional e Não Relacional](https://marquesfernandes.com/tecnologia/banco-de-dados-relacional-sql-e-nao-relacional-nosql-o-que-sao-para-que-servem-e-qual-a-diferenca/)

[Tutorial de MongoDB para iniciantes](https://terminalroot.com.br/2020/02/mongodb.html)