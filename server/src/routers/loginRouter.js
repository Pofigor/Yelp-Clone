const express = require('express');

const router = express.Router();

const { renderLogin, loginUser } = require('../controllers/loginController');

router.get('/', renderLogin);
router.post('/', loginUser);

module.exports = router;
