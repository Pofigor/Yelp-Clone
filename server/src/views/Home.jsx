const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <h1>Home page</h1>
      <hr />
      <h1>
        Hello,
        {' '}
        {newUser}
        !
      </h1>

    </Layout>
  );
};
