import jwt from 'jsonwebtoken'

// Мидлвар для проверки JWT
export function checkTokenMiddleware(req, res, next) {

  const token = req.cookies?.token

  if (!token) {
    return res.render('errors',{errors: 'Вам необходимо авторизироваться'})
  }

  try {
    // Проверяем и декодируем токен
    const decoded = jwt.verify(token, process.env.SECRET_KEY, { algorithms: ['HS256'] });
    // Кладём данные пользователя в req.user для дальнейшего использования
    req.user = decoded;
    next();
  } catch (err) {
    return res.render('errors',{errors: err})
  }
};