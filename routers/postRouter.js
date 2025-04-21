const express = require("express");
const router = express.Router();
const { index, destroy } = require("../controllers/postController");

router.get("/posts", index);
router.delete("/posts/:id", destroy);
module.exports = router;
