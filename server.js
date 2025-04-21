const express = require("express");
const db = require("./data/db.js");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
