exports.corsMiddleware = (req, res, next) => {
  const accessList = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
  ];
  const origin = req.get('origin');

  if (accessList.includes(origin)) {
    // Указываем кто может слать нам запрос | или ставим * - разрешаем всем
    res.header('Access-Control-Allow-Origin', origin);
    // Устанавливаем куку в заголовок запроса
    res.header('Access-Control-Allow-Credentials', true);
    // Устанавливаем какие методы можем обрабатывать
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type');
  }
  next();
};
