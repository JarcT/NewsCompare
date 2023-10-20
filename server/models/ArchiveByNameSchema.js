const { default: mongoose } = require("mongoose");

const ArchiveByName = new mongoose.Schema({
  name: {
    type: String,
  },
  oldScreenshot: {
    type: Array,
  },
});

module.exports = mongoose.model("ArchiveByName", ArchiveByName);
