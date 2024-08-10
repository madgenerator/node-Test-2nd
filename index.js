const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS 허용
app.use(cors());

// 모든 요청에 대한 로그 출력
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// GET 요청에 대한 핸들러
app.get('/', (req, res) => {
  const { name = 'Unknown', age = 'Unknown' } = req.query;
  res.send(`당신의 이름은 ${name}이고, ${age} 살입니다.`);
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 포트에서 실행 중입니다.`);
});
