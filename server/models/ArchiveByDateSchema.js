const { default: mongoose } = require("mongoose");

const ArchiveByDate = new mongoose.Schema({
  date: {
    type: String,
  },
  data: {
    type: Array,
  },
});

module.exports = mongoose.model("ArchiveByDate", ArchiveByDate);
