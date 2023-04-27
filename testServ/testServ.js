const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/ChatBot_CEX/userChat", (req, res) => {
  const Msg = req.body.Msg;
  console.log(Msg);
  res.send(Msg);
});

app.listen("8080", (err) => {
  console.log("8080포트로 서버 대기중...");
});
