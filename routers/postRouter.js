const express = require("express");
const router = express.Router();
const { index } = require("../controllers/postController");

router.get("/posts", index);
module.exports = router;
