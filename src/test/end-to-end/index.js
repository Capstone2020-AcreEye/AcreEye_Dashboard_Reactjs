const { Builder, By } = require('selenium-webdriver')

const credentials = {
    "email": "test@gmail.com",
    "password": "adil1234"
}

async function testDashboard() {
    try {
        let driver = await new Builder().forBrowser('chrome').build()
        await driver.get('https://acreeye.web.app/')

        //need to change to wait-until
        await new Promise(resolve => setTimeout(resolve, 1500));

        await driver.findElements(By.xpath('//input[@class="form-control form-control-user"]')).then((inputs) => {
            inputs[0].sendKeys(credentials.email)
            inputs[1].sendKeys(credentials.password)
        })

        await driver.findElement(By.xpath('//button[text()="Login"]')).click()

        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Login Successful: " + await (await driver.findElement(By.className('sidebar-brand-text mx-3'))).isDisplayed())

    } catch (e) {

        console.log(e)
    }
}

testDashboard()