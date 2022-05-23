onst React = require('react');
const Layout = require('./Layout');

function Auth({ title }) {
  return (
    <Layout title={title}>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="signin-form" action="" method="post">
              <div className="form-group mt-5">
                <input type="text" name="email" className="form-control" placeholder="email..." />
              </div>
              <div className="form-group mt-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password..."
                  required
                />
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-secondary">&nbsp; Войти &nbsp;</button>
              </div>
            </form>
            <div><a href="/">На главную</a></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Auth;
