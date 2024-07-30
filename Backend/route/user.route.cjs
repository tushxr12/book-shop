const express = require("express");
const { signup, login } = require("../controller/user.controller.cjs");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;