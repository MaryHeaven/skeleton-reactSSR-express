const React = require('react');
const Layout = require('./Layout');

function ErrorPage({ title }) {
  return (
    <Layout title={title}>
      <div className="card">
        <h1>Ошибка 404</h1>
      </div>
    </Layout>
  );
}

module.exports = ErrorPage;
