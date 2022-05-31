const React = require('react');
const Layout = require('./Layout');

function Registration({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="signup-form" action="/registration" method="post">
              <div className="form-group mt-5">
                <input type="text" name="name" className="form-control" placeholder="name..." />
              </div>
              <div className="form-group mt-3">
                <input type="text" name="email" className="form-control" placeholder="email..." />
              </div>
              <div className="form-group mt-3">
                <input type="password" name="password" className="form-control" placeholder="password..." />
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-secondary">&nbsp; Зарегистрироваться &nbsp;</button>
              </div>
            </form>
            <div><a href="/">На главную</a></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Registration;
