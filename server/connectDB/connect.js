const mongoose = require("mongoose");

const connectDB = async (connectString) => {
  return await mongoose.connect(connectString);
};

module.exports = connectDB;
