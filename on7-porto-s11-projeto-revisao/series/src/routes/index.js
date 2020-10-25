const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        title: "Lista de Séries que eu amo/maratonei",
        version: "1.0.0"
    })
})

module.exports = router;