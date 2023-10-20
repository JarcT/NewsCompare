const DailyScreenshots = require("../models/DailyScreenshotsSchema");
const { screen } = require("../mainFn");
const getNewScreenshots = async (req, res) => {
  const data = await DailyScreenshots.find({}).select("-cookieSelector");
  console.log(data);
  res.status(200).json({ data });
};

module.exports = { getNewScreenshots };
