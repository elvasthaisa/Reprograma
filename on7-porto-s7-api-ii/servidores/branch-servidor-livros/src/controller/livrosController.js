const livros = require('../model/lista-livros.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(livros);
}

module.exports = { getAll };