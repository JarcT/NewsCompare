const DailyScreenshots = require('../models/DailyScreenshotsSchema')

const getNewScreenshots = async(req, res) => {
    const data = await DailyScreenshots.find({}).select('-cookieSelector')
    console.log(data);
    res.status(200).json({data})
}

module.exports = {getNewScreenshots}