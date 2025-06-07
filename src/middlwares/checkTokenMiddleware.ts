const jwt = require('jsonwebtoken');

// Мидлвар для проверки JWT
export function checkTokenMiddleware(req, res, next) {
  
  const token = req.cookies?.token 

  if (!token) {
    return res.status(401).json({ message: 'Вам необходимо авторизироваться' });
  }

  try {
    // Проверяем и декодируем токен
    const decoded = jwt.verify(token, process.env.SECRET_KEY, { algorithms: ['HS256'] });
    // Кладём данные пользователя в req.user для дальнейшего использования
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Неверный токен или срок действия истёк.' });
  }
};