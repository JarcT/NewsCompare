require('dotenv').config()
const puppeteer = require('puppeteer')
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
})

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

const screenShot =  async (name, url, cookieSelector) => {
    
    //puppeteer
    const browser = await puppeteer.launch()
    
    const page = await browser.newPage()
    await page.goto(url, {waitUntil: ['load', 'domcontentloaded']})
    await page.setViewport({width: 1920, height: 1580, deviceScaleFactor: 0.55,})
    //allowing the cookies- does not always work(BBC!!!), need to manualy get the cookieSelectors
    try {
        await page.waitForSelector(cookieSelector, {visible: true, timeout: 5000})
        await page.click(cookieSelector)
        await delay(500) //dalay for cookies to dispaear
    } catch (error) {
        console.log(error)
    }
    const screenshot = await page.screenshot({encoding: 'base64'})
    const screemshotBase64 = `data:image/png;base64,${screenshot}` //for storing
    await browser.close();
    
    //date and name for cloudinary
    const date = new Date()
    const today = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    const screenshotName = `-${name}-${today}-` // becomes part od secured_url (imortant for sorting before diplaying archive)
    //cloudinary upload return an object
    const image = await cloudinary.uploader.upload(screemshotBase64, {
        folder: 'newScreenshots',
        public_id: screenshotName    
    })
    console.log("success")
    return image
};



module.exports = screenShot