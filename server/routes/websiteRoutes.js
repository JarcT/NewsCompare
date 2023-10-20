const {
  getNewScreenshots,
} = require("../controllers/newScreenshotsController.js");
const express = require("express");
const getScreenshotsArchive = require("../controllers/screenshotsArchiveController.js");
const router = express.Router();

router.get("/newScreenshots", getNewScreenshots);
router.get("/archive", getScreenshotsArchive);
module.exports = router;
