const React = require('react');

const Layout = require('./Layout');

module.exports = function Home(oneRest) {
  return (
    <Layout>
      <h1>Home page</h1>
      <hr />

      <div className="one-item-column">

        <div className="one-item-row">
          <ul className="list-group list-group-flush-card">
            <img src={oneRest.img} className="card-img-top figure-img img-fluid rounded one-item-img" alt="" />
            <li className="list-group-item">
              Квартира
              {' '}
              {oneRest.name}
              {' '}
              м²
            </li>
            <li className="list-group-item">
              Цена
              {' '}
              {oneRest.desc}
              {' '}
              ₽ в месяц
            </li>

          </ul>
        </div>

      </div>

    </Layout>
  );
};
