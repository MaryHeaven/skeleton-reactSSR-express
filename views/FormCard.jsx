const React = require('react');
const Layout = require('./Layout');

function FormCard({ title }) {
  return (
    <>
      <form id="formCard" method="post">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Название карточки</label>
          <input name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Описание карточки</label>
          <input name="description" type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Добавить картинку</label>
          <input name="img" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-primary" id="formCard">Submit</button>
      </form>
      <section id="cards" />

    </>
  );
}

module.exports = FormCard;
