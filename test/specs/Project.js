const ProjectLogin = require('../pageobjects/ProjectLogin.js')
// const expectchai = require('chai').expect

require('../pageobjects/ProjectLogin.js')
describe('Demo Website',async()=>{

    it('E2E Test',async()=>{

        const products = ['Sauce Labs Bolt T-Shirt','Test.allTheThings() T-Shirt (Red)']
        await browser.url("https://www.saucedemo.com/")
        await ProjectLogin.LoginPage()

        await expect(browser).toHaveTitle(expect.stringContaining("Swag Labs"))

        const details = await $$(".inventory_item_description")

        for(let i=0;i<details.length;i++){
            const itemsname = await details[i].$(".inventory_item_name")
            if(products.includes(await itemsname.getText())){
                await details[i].$(".btn_inventory").click()
            }
        }
        await $(".shopping_cart_link").click()
        await $("#checkout").click()

        await $("#first-name").setValue("aevan")
        await $("#last-name").setValue("vaghani")
        await $("#postal-code").setValue("364003")

        await $("#continue").click()

        const totalprices = await $$(".inventory_item_price")

        let productPrices = []
        for(let i=0;i<totalprices.length;i++){
            var price1 = await totalprices[i].getText()
            const priceT = await parseFloat(price1.split("$")[1])
            productPrices.push(priceT)
        }

        let sum = 0
        for (let price of productPrices) {
            sum += price
        }
        

        const priceString  = await $(".summary_subtotal_label").getText()
        const priceFloat =await parseFloat(priceString.split("$")[1])


    if(sum === priceFloat){
        await $("#finish").click()
    }

        await  expect($(".complete-header")).toHaveText(expect.stringContaining("Thank you for your order!"))

    })
})
