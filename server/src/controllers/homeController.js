const renderTemplate = require('../lib/renderTemplate');

const Home = require('../views/Home');

const renderHome = (req, res) => {
  const newUser = req.session?.newUser;
  renderTemplate(Home, { newUser }, res);
};

module.exports = { renderHome };
