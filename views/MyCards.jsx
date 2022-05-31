const React = require('react');

function MyCard({
  id, title, description, img,
}) {
  return (
    <div className="card" id={id}>
      <img src={img} className="card-img-top" alt="..." />

      <div className="card-body">
        <h5 className="card-title">
          Название карточки -
          {' '}
          {title}
        </h5>
        <p className="card-text">
          Описание карточки -
          {' '}
          {description}
        </p>
        <a href="#" className="btn btn-primary">Редактировать</a>
        <a href="#" className="btn btn-primary" deleteid={id}>Удалить</a>
      </div>
    </div>
  );
}

module.exports = MyCard;
