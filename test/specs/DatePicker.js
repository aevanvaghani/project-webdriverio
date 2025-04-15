describe('DatePicker Test',async()=>{

    it('Select Date',async()=>{

        await browser.url("https://demo.automationtesting.in/Datepicker.html")
        await $("div > img").click()
        await browser.closeWindow()
        
    })
})