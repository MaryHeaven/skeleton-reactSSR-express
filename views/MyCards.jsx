const React = require('react');
const Layout = require('./Layout');

function MyCard({ title }) {
  return (
    <Layout title={title}>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">Название карточки</h5>
          <p className="card-text">Описание карточки.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card" aria-hidden="true">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6" />
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7" />
            <span className="placeholder col-4" />
            <span className="placeholder col-4" />
            <span className="placeholder col-6" />
            <span className="placeholder col-8" />
          </p>
          <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6" />
        </div>
      </div>
    </Layout>
  );
}

module.exports = MyCard;
