const React = require('react');

const Layout = require('./Layout');

function Register() {
  return (
    <Layout>
      <h2>Registration</h2>
      <hr />
      <form action="/register" method="POST" id="registerForm">
        <label htmlFor="namelInput" className="form-label">Name</label>
        <input name="name" type="text" className="form-control" id="namelInput" />
        <label htmlFor="emailInput" className="form-label">Email</label>
        <input name="email" type="email" className="form-control" id="emailInput" />
        <label htmlFor="passwordInput" className="form-label">Password</label>
        <input name="password" type="password" className="form-control" id="passwordInput" />
        <button type="submit" className="btn btn-primary formBtn">Registration</button>
      </form>
    </Layout>
  );
}

module.exports = Register;
