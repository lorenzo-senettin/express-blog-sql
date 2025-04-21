const db = require("../data/db");

// GET /posts
function index(req, res) {
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Errore server" });
    }
    res.json(results);
  });
}

module.exports = { index };
