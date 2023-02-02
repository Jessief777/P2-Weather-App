const express = require("express");
const router = new express.Router();
const weatherController = require("../../../controllers/weatherController")

// router.get("/abc", (req, res) => {
//   res.end("OK");
// });
router.get('/', weatherController.index)
router.get('/weather', weatherController.indexNew)

module.exports = router;

