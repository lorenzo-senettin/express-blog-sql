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

// DELETE /posts/:id
function destroy(req, res) {
  const id = req.params.id;
  db.query("DELETE FROM posts WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Errore server" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Post non trovato" });
    }
    res.status(204).end();
  });
}

// SHOW /posts/:id
function show(req, res) {
  const id = req.params.id;
  db.query("SELECT * FROM posts WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Errore server" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Post non trovato" });
    }
    res.json(results[0]);
  });
}

module.exports = {
  index,
  show,
  destroy,
};
