const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// GET 요청에 대한 핸들러
app.get('/', (req, res) => {
  // 요청 파라미터에서 "name"과 "age" 추출
  const name = req.query.name || 'Unknown';
  const age = req.query.age || 'Unknown';

  // 응답
  res.send(`당신의 이름은 ${name}이고, ${age} 살입니다.`);
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 포트에서 실행 ggg중입니다.`);
});
