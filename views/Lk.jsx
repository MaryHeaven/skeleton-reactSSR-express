const React = require('react');
const Layout = require('./Layout');
// const { isAuth } = require('../middleware/isAuth');

function Lk({ title, name, user }) {
  return (
    <Layout title={title}>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            { !user ? (
              <h1>А ты кто и как тут оказался?</h1>
            ) : (
              <>
                <h1>
                  Привет,
                  {name}
                </h1>
                <div><h3>Сюда ты можешь добавить свои карточки!!!1!</h3></div>
                <button type="button" href="/itemform">Добавить карточку</button>
                <div> </div>
              </>
            )}
            <div><a href="/">На главную</a></div>
            <div><button type="button" id="createCard">Добавить карточку</button></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Lk;
