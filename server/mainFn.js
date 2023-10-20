// const CronJob = require("../lib/cron.js").CronJob;
screenShot = require("./screenShootFn.js");
const DailyScreenshots = require("./models/DailyScreenshotsSchema.js");
const ArchiveByName = require("./models/ArchiveByNameSchema.js");
const ArchiveByDate = require("./models/ArchiveByDateSchema.js");
const connectDB = require("./connectDB/connect.js");

const screen = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    let current = await DailyScreenshots.find({}); //gets current screenshot data
    const names = current.map((website) => website.name); //and collects the names in the 'names' array
    for (let i = 0; i < names.length; i++) {
      //gets archive and current database
      const currentWebsite = await DailyScreenshots.findOne({ name: names[i] });
      //-------------archive by name
      const archive = await ArchiveByName.findOne({ name: names[i] });
      const { name, newScreenshot } = currentWebsite;

      if (!archive) {
        await ArchiveByName.create({
          name: name,
          oldScreenshot: newScreenshot,
        });
      }
      if (archive) {
        const { oldScreenshot } = archive;
        await ArchiveByName.findOneAndUpdate(
          { name: archive.name },
          { oldScreenshot: [...oldScreenshot, newScreenshot] }
        );
      }
      //-------------archive by name

      //takes the screenshot,uploads to cloudinary and returns the image object -https://cloudinary.com/documentation/image_upload_api_reference    image.secure_url is the url needed
      const image = await screenShot(
        currentWebsite.name,
        currentWebsite.url,
        currentWebsite.cookieSelector
      );
      //updates current database
      await DailyScreenshots.findOneAndUpdate(
        { name: names[i] },
        { newScreenshot: image.secure_url }
      );
    }
    //--------------- archive by date
    const date = new Date();
    const today = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`;
    current = await DailyScreenshots.find({}).select("-cookieSelector"); //gets the updated current screenshot data
    await ArchiveByDate.create({ date: today, data: current });

    //--------------- archive by date
  } catch (error) {
    console.log(error);
  }
  return null;
};

// run function neveryday at 8 a.m.
// const cronJob = cron.schedule("0 8 * * *", () => {
//   screen();
// });
// cronJob.start();

module.exports = { screen };
console.log("Cron job scheduled to run every day at 8 a.m.");
