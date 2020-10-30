const movies = require('../models/movies.json');
const fs = require('fs');

const getAllMovies = (req, res) => {
    console.log(req.url);
    res.status(200).send(movies)
}

const getMovie = (req, res) => {
    const movieId = req.params.id;
    const movieFound = movies.find(movie => movie.id == movieId)
    if (movieFound) {
        res.status(200).send(movieFound)
    } else {
        res.status(404).send({ message: "Filme não encontrado" })
    }
}

const createMovie = (req, res) => {
    const { id, name, genre, synopsis, watched } = req.body;
    movies.push({ id, name, genre, synopsis, watched })
    fs.writeFile("./src/models/movies.json", JSON.stringify(movies), 'utf8', function(err) {
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log('Arquivo atualizado com sucesso!')
            const movieFound = movies.find(movie => movie.id == id)
            res.status(200).send(movieFound)
        }
    })
}

const updateMovie = (req, res) => {
    try {
        const movieId = req.params.id;
        const movieToUpdate = req.body;

        const movieFound = movies.find(movie => movie.id == movieId);
        const movieIndex = movies.indexOf(movieFound);

        if (movieIndex >= 0) {
            movies.splice(movieIndex, 1, movieToUpdate);
        } else {
            res.status(404).send({ message: "Filme não encontrado para ser atualizado "})
        } 

        fs.writeFile('./src/models/movies.json', JSON.stringify(movies), 'utf8', function(err) {
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log('Arquivo de flmes atualizado com sucesso!');
                const movieUpdated = movies.find(movie => movie.id == movieId)
                res.status(200).send(movieUpdated)
            }
        })
    } catch (err) {
        res.status(500).send({ message: err })
    }
}

const updateWatchedStatus = (req, res) => {
    try {
        const movieId = req.params.id;
        const watched = req.body.watched;

        const movieToUpdate = movies.find(movie => movie.id == movieId);
        const movieIndex = movies.indexOf(movieToUpdate);

        if (movieIndex >= 0) {
            movieToUpdate.watched = watched;
            movies.splice(movieIndex, 1, movieToUpdate);
        } else {
            res.status(404).send({ message: "Filme não encontrado para informar se foi assistido ou não" })
        }

        fs.writeFile('./src/models/movies.json', JSON.stringify(movies), 'utf8', function(err) {
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log('Arquivo atualizado com sucesso')
                const movieUpdated = movies.find(movie => movie.id == movieId)
                res.status(200).send(movieUpdated)
            }
        })
    } catch (err) {
        res.status(500).send({ message: err })
    }
}

const deleteMovie = (req, res) => {
    try {
        const movieId = req.params.id;
        const movieFound = movies.find(movie => movie.id == movieId);
        const movieIndex = movies.indexOf(movieFound);

        if (movieIndex >= 0) {
            movies.splice(movieIndex, 1)
        } else {
            res.status(404).send({ message: "Filme não encontrado para ser deletado" })
        } 

        fs.writeFile('./src/models/movies.json', JSON.stringify(movies), 'utf8', function (err) {
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log('Filme deletado com sucesso do arquivo!')
                res.sendStatus(204)
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Erro ao deletar o filme"})
    }
}

module.exports = {
    getAllMovies,
    getMovie,
    createMovie,
    updateMovie,
    updateWatchedStatus,
    deleteMovie
}