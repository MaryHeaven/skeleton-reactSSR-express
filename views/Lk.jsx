const React = require('react');
const isLogin = require('../middleware/isLogin');
const Layout = require('./Layout');
const FormCard = require('./FormCard');
const MyCard = require('./MyCards');
// const { isAuth } = require('../middleware/isAuth');

function Lk({
  title, user, card,
}) {
  return (
    <Layout title={title} user={user}>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            { !user ? (
              <h1>А ты кто и как тут оказался?</h1>
            ) : (
              <>
                <>
                  <h1>
                    Привет,
                    {user.name}
                  </h1>
                  <div><h3>Сюда ты можешь добавить свои карточки!!!1!</h3></div>
                </>
                <FormCard />

            <div id="cardsDiv">
              { card.map((el) => <MyCard card={el} />)}
            </div>
              </>
            )}
            <div><a href="/">На главную</a></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Lk;
