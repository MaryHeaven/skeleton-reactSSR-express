const React = require('react');
const Layout = require('./Layout');

function Home({ title, name }) {
  return (
    <Layout title={title}>
      {/* <meta charset="UTF-8" /> */}
      <h1 id="hello" className="title">
        Привет,
        {' '}
        товарищ!
      </h1>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-10 col-lg-10">
            <h3>Приглашаю на самый классный сайт</h3>
            <p>Но сначала нужно зарегаться или авторизоваться</p>
          </div>
        </div>
      </div>

    </Layout>
  );
}

module.exports = Home;
