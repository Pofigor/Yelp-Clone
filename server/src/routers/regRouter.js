const express = require('express');

const router = express.Router();

const { renderRegister, registerUser } = require('../controllers/regControllers');

router
  .get('/register', renderRegister)
  .post('/register', registerUser);

module.exports = router;
