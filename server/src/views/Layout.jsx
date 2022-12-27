const React = require('react');

module.exports = function Layout({ children, newUser }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles/styles.css" />
        <title>YelpServer</title>
      </head>

      <header className="header">
        <a className="home" href="/">Home</a>
        { newUser
          ? (
            <>
              <div className="login">
                Привет,
                {' '}
                {newUser}
                !
              </div>
              <a className="register" href="/logout">Выйти</a>
              { newUser === 'Adam'
                ? <a className="secret" href="/secret">Secret</a>
                : ''}
            </>
          )
          : (
            <>
              <a className="login" href="/login">Login</a>
              <a className="register" href="/register">Registration</a>
            </>
          )}
      </header>

      <body>
        {children}
      </body>
    </html>
  );
};
