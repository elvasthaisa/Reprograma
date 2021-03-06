const express = require('express');
const app = express();

//rotas
const index = require('./routes/index')
const movies = require('./routes/moviesRoute');

app.use(express.json());

app.use('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )

    next();
})

app.use('/', index);
app.use('/movies', movies);

module.exports = app;