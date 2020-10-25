const express = require('express');
const app = express();

//rotas
const index = require('./routes/index');
const series = require('./routes/seriesRoute');

app.use(express.json())

app.use('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )

    next()
})

app.use('/', index);
app.use('/series', series);

module.exports = app;