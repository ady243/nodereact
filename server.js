const express = require("express");
require("dotenv").config();

const app = express();

//port .env
const PORT = process.env.PORT || 5000;

//utlisation de express json

app.use(express.json());

//chemin app.get midleware

app.get("/", (req, res) => {
  res.send("salut");
});

app.listen(PORT, () => {
  console.log(`Le serveur est sur le port  : ${PORT}`);
});

console.log((xs, ...x) => (1, 2, 3))[(2, 3)];
