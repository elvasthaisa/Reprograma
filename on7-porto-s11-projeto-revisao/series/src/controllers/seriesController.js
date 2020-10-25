const series = require('../models/series.json');
const fs = require('fs');

const getAllSeries = (req, res) => {
    console.log(req.url);
    res.status(200).send(series);
}

const getSerieById = (req, res) => {
    const serieId = req.params.id;
    const serieFound = series.find(serie => serie.id == serieId)

    if (serieFound) {
        res.status(200).send(serieFound)
    } else {
        res.status(404).send({ message: "Série não encontrada" })
    }

    res.status(200).send(serieFound)
}

const postSerie = (req, res) => {
    console.log(req.body);
    const { id, name, genre, synopsis, liked, seasons } = req.body;
    series.push({ id, name, genre, synopsis, liked, seasons })

    fs.writeFile('./src/models/series.json', JSON.stringify(series), 'utf8', (err) => {
        if (err) {
            return res.status(424).send({ message: err })
        }
        console.log("Arquivo atualizado com sucesso!");
    });

    res.status(200).send(series)
}

const createSeason = (req, res) => {
    console.log(req.body);

    const serieId = req.params.id;
    const serieFiltrada = series.find((serie) => serie.id == serieId);

    const { id, code, episodes } = req.body;
    serieFiltrada.seasons.push({ id, code, episodes })

    fs.writeFile('./src/models/series.json', JSON.stringify(series), 'utf8', (err) => {
        if (err) {
            return res.status(424).send({ message: err })
        }
        console.log('Arquivo criado com sucesso!')
    })

    return res.status(200).send(series);
}

const putSerie = (req, res) => {
    const serieId = req.params.id;
    const serieToUpdate = req.body;
    const serieFiltrada = series.find((serie) => serie.id == serieId);
    const serieIndex = series.indexOf(serieFiltrada);

    series.splice(serieIndex, 1, serieToUpdate);

    fs.writeFile('./src/models/series.json', JSON.stringify(series), 'utf8', (err) => {
        if (err) {
            return res.status(424).send({ message: err })
        }
        console.log('Arquivo atualizado com sucesso');
    })

    res.status(200).send(series)
}

module.exports = {
    getAllSeries,
    getSerieById,
    postSerie,
    createSeason,
    putSerie
}