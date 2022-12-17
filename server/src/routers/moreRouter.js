const express = require('express');

const router = express.Router();

const { getOneRest } = require('../controllers/moreControllers');

router.get('/:id', getOneRest);

module.exports = router;
