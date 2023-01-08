const express = require("express");
const router = new express.Router();

router.get("/abc", (req, res) => {
  res.end("OK");
});

module.exports = router;

