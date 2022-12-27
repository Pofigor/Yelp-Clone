const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');

const Register = require('../views/Register');

const { User } = require('../../db/models');

const renderRegister = (req, res) => {
  renderTemplate(Register, {}, res);
};

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hash });
    req.session.newUser = newUser.name;
    req.session.save(() => {
      res.redirect('/login');
    });
  } catch (error) {
    console.log('ERROR CREATE NEW USER', error);
    next(error);
  }
};

module.exports = { renderRegister, registerUser };
