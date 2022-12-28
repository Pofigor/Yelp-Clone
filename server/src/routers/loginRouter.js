const express = require('express');

const router = express.Router();

const { renderLogin, loginUser } = require('../controllers/loginController');

router.get('/login', renderLogin);
router.post('/login', loginUser);

module.exports = router;
