const { cookieSites } = require('../initialData/initialData.js');
const screenShots = require('../models/DailyScreenshotsSchema.js')
const connectDB = require('../connectDB/connect.js')
require('dotenv').config()

//Used only once to populate the database with basic information of the websites

const start = async () => {
    console.log(cookieSites);
        try {
            await connectDB(process.env.MONGO_DB)
            await screenShots.deleteMany();
            await screenShots.create(cookieSites)
            console.log('success!');
            process.exit(0)
        } catch (error) {
            console.log(error);
            process.exit(1)
        }
}

start()