// Промежуточная функция для проверки на авторизацию
function isLogin(req, res, next) {
  if (req.session.user) {
    res.redirect('/lk');
    return;
  }

  next();
}

module.exports = isLogin;
