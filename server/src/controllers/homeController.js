const renderTemplate = require('../lib/renderTemplate');

const Home = require('../views/Home');

const renderHome = (req, res) => {
  renderTemplate(Home, {}, res);
};

module.exports = { renderHome };
