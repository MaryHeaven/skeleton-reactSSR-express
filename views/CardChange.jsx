const React = require('react');
const Layout = require('./Layout');

function CardChange({ id }) {
  return (
    <Layout>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Изменить название карточки</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Изменить описание</label>
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Заменить картинку</label>
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary" updateid={id}>Изменить</button>
        <button type="submit" className="btn btn-primary">Отмена редактирования</button>
      </form>
    </Layout>
  );
}

module.exports = CardChange;
