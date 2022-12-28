const express = require('express');

const router = express.Router();

const { renderRegister, registerUser } = require('../controllers/regControllers');

router
  .get('/', renderRegister)
  .post('/', registerUser);

module.exports = router;
