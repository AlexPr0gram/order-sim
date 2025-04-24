const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Разрешает все источники
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Привет от бэка!" });
});

app.post('/api/getList', (req, res) => {
    // const data = req.body;
    // console.log('Получено:', data);
    // res.json({ message: 'Принято!', received: data });
  });

app.listen(3000);
