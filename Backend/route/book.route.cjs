const express = require("express");
const { getBook } = require("../controller/book.controller.cjs");

const router = express.Router();

router.get("/", getBook);

module.exports = router;
