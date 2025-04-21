const express = require("express");
const router = express.Router();
const { index, show, destroy } = require("../controllers/postController");

router.get("/posts", index);
router.delete("/posts/:id", destroy);
router.get("/posts/:id", show);

module.exports = router;
