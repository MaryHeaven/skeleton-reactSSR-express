const React = require('react');
const isLogin = require('../middleware/isLogin');

function Layout({ title, children, user }) {
  console.log('USER111 ', user);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
        <script defer src="/js/script.js" />
        <title>{title}</title>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                { user ? (
                  <>
                    <li className="nav-item">
                      <a
                        className="nav-link underline-one"
                        aria-current="page"
                        href="/lk"
                      >
                        Личный кабинет
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link underline-one"
                        aria-current="page"
                        href="/logout"
                      >
                        Выйти
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <a
                        className="nav-link underline-one"
                        aria-current="page"
                        href="/registration"
                      >
                        Зарегистрироваться
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link underline-one"
                        aria-current="page"
                        href="/login"
                      >
                        Войти
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
