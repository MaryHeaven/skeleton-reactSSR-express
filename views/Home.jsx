const React = require('react');
const Layout = require('./Layout');

function Home({ title, name, user }) {
  console.log('HOME USR ', user);
  return (
    <Layout title={title} user={user}>
      {/* <meta charset="UTF-8" /> */}
      {user ? (
        <h1 id="hello" className="title">
          Привет,
          {' '}
          {user.name}
          !
        </h1>
      ) : (
        <h1 id="hello" className="title">
          Привет,
          {' '}
          товарищ!
        </h1>
      )}
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
