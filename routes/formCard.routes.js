require('dotenv');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const FormCard = require('../views/FormCard');
const Mk = require('../views/MyCards');
const { Card, User } = require('../db/models/index');



router.route('/')
  .get(async (req, res) => {
    // const card = await Card.findAll({ raw: true });
    // console.log(card);
    const formCard = React.createElement(FormCard, {
      title: 'Личный кабинет',
      user: req.session.uid,
    });

    const htmlForm = ReactDOMServer.renderToStaticMarkup(formCard);
    res.write('<!DOCTYPE html>');
    res.end(htmlForm);
  })
  .post(async (req, res) => {
    const { title, description, img } = req.body;
    const card = await Card.findOne({ where: { title } });
    if (card) {
      res.send('Такая карточка уже создана');
      res.redirect('/lk');
    } else {
      const newCard = await Card.create({
        title, description, img, user_id: req.session.uid.id,
      });
      const home = React.createElement(Mk, {
        newCard,
      });
      const html = ReactDOMServer.renderToStaticMarkup(home);
      res.write('<!DOCTYPE html>');
      res.end(html);
    }
  });
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Card.destroy({ where: { id } });
  // const card = await Card.findAll({ raw: true });
  res.redirect('/lk');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  console.log('ftghfvhgfh');
  const { newTitle, newDescription, newImg } = req.body;
  await Card.update(
    { title: newTitle, description: newDescription, img: newImg },
    { where: { id } },
  );
  const card = await Card.findOne({ where: { id }, raw: true });
  const home = React.createElement(Mk, {
    card,
  });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  // res.write('<!DOCTYPE html');
  res.end(html);
});

module.exports = router;
