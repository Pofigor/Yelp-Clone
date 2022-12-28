const isAuth = (req, res) => {
  if (req.session?.newUser) {
    return res.sendStatus(200);
  }
  res.sendStatus(400);
};

module.exports = { isAuth };
