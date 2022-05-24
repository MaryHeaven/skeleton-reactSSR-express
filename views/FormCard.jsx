const React = require('react');
const Layout = require('./Layout');

function FormCard({ title }) {
  return (
    <Layout title={title}>
      <form id="formCard" action="/formCard" method="post">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Название карточки</label>
          <input name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Описание карточки.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Описание карточки</label>
          <input name="description" type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <section id="cards"></section>
    </Layout>
  );
}

module.exports = FormCard;
