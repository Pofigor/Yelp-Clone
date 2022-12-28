const React = require('react');

const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <h2>Войдите на сайт</h2>
      <hr />
      <form action="/login" method="POST" className="loginForm">

        <label className="emailLabel">Email</label>
        <input type="email" name="email" className="emailInput" placeholder="Введите почту" />

        <label className="passwordLabel">Password</label>
        <input type="password" name="password" className="passwordInput" placeholder="Введите пароль" />

        <button type="submit" className="loginBtn">Отправить</button>

      </form>
    </Layout>
  );
}

module.exports = Login;
