require('dotenv').config();

const router = require('express').Router();

//

router.route('/')
  .get(async (req, res) => {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: 'Ошибка при удалении сессии' });
      }
      res
        .clearCookie('user_sid') // серверное удаление куки по имени
        .redirect('/');
    });
    console.log('LOGOUT ', req.session);
    // req.session.destroy();
    // res.send('ok');
  });

module.exports = router;
