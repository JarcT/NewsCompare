const ScreenArchive = require('../models/ArchiveByDateSchema')


const getScreenshotsArchive = async (req, res) => {
    const archive = await ScreenArchive.find({})
    console.log(archive);
    res.status(200).json(archive)
}


module.exports = getScreenshotsArchive



