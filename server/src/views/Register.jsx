const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <h2>Зарегистрируйтесь</h2>
      <hr />
      <form action="/register" method="POST" className="loginForm">

        <label className="nameLabel">Name</label>
        <input type="text" name="name" className="nameInput" placeholder="Введите имя" />

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
