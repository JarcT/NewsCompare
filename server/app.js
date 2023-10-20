const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
require("express-async-errors");
const router = require("./routes/websiteRoutes");
const connectDB = require("./connectDB/connect");
const errorHandeler = require("./middleware/errorHandeler");

//security
const cors = require("cors");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");

app.set("trusty proxy", 1);
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   limit: 100,
// });

// app.use(limiter);
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.json({ message: "Compare the news" });
});

app.use(errorHandeler);
app.use((req, res) => {
  res.status(404).json({ message: "Route not found..." });
});

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    app.listen(port, console.log(`the server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
