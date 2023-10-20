const ScreenArchive = require("../models/ArchiveByDateSchema");

const getScreenshotsArchive = async (req, res) => {
  const archive = await ScreenArchive.find({});
  archive.reverse();
  res.status(200).json(archive);
};

module.exports = getScreenshotsArchive;
