/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
const React = require('react');

function MyCard({
  card,
}) {
  console.log(card);
  return (
        <div className="card" id={card.id}>
          <img src={card.img} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">
              Название карточки -
              {' '}
              {card.title}
            </h5>
            <p className="card-text">
              Описание карточки -
              {' '}
              {card.description}
            </p>
            <a href="/" className="card-update btn btn-primary" showid={card.id}>Редактировать</a>
            <a href="#" className="btn btn-primary" deleteid={card.id}>Удалить</a>
          </div>

          <form id={`redForm${card.id}`} style={{ visibility: 'hidden' }}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Изменить название карточки</label>
              <input name="newTitle" type="text" className="form-control" id={`name${card.id}`} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Изменить описание</label>
              <input name="newDescription" type="text" className="form-control" id={`description${card.id}`} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Заменить картинку</label>
              <input name="newImg" type="text" className="form-control" id={`image${card.id}`} />
            </div>
            <button type="click" className="btn btn-primary" updateid={card.id}>Изменить</button>
            {/* <button type="submit" className="btn btn-primary">Отмена редактирования</button> */}
          </form>

          {/* <script>
        document.getElementById(`redForm${id}`).addEventListener('submit', async (e) => {
          e.preventDefault();
          const newTitle = document.getElementById(`name${id}`);
          const newDescription = document.getElementById(`description${id}`);
          const newImg = document.getElementById(`image${id}`);

          const body = {
            newTitle,
            newDescription,
            newImg,
          }

          const resp = await fetch(`/lk/:${id}`, {
            method: 'PUT',
            body,
            headers: { 'Content-Type': 'application/json' },
          });
        });
      </script> */}
        </div>
  );
}

module.exports = MyCard;
