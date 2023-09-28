const { default: mongoose } = require("mongoose")

const dailyScreenshots = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
    },
    url: {
        type: String,
        required: [true, 'Please provide url'],
    },
    cookieSelector: {
        type: String,
    },
    newScreenshot: {
        type: Object
    },
})

module.exports = mongoose.model('DailyScreenshots', dailyScreenshots)