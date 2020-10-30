const express = require('express');
const router = express.Router();
const controller = require('../controllers/seriesController');

router.get('/', controller.getAllSeries);
router.get('/:id', controller.getSerieById);
router.post('/', controller.postSerie);
router.post('/:id/season', controller.createSeason);
router.put('/:id', controller.putSerie);
module.exports = router;