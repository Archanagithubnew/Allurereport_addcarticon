import report from '@wdio/allure-reporter';
export const selectprod = async (product) => {

    const listofp = await $$("//div[@class='inventory_item_name']")
    console.log(listofp.length)
    await browser.pause(3000)
    for (let i = 0; i < listofp.length; i++) {
        console.log(listofp[i].getText())     
        if (await (listofp[i]).getText() == product) {      
           
            await (listofp[i]).click()
        
           const item =await  $("//div[@class='inventory_details_name large_size']")
           console.log('added prodcutvis'+await (item.getText()))
           
           report.addStep(`addcart icon is ${await (item.getText())}`)
           

            const addtocart = await $("//button[@class='btn btn_primary btn_small btn_inventory']")
            await addtocart.click();

            const carticon = await $("//a[@class='shopping_cart_link']");
            console.log('addicon is' +await ( carticon.getText()))

            report.addStep(`addcart icon is ${await ( carticon.getText())}`)
            break
        }  

       // 
        
       
    }
}

export const removeprod = async (removeproducts) => {

    const desc = await $$('.inventory_item_name')
    await browser.pause(2000)
    for (let i = 0; i < desc.length; i++) {
        if (await (desc[i]).getText() == removeproducts) {

            await desc[i].waitForClickable(2000)
            await desc[i].click();
            const remove = await $("//button[@class='btn btn_secondary btn_small btn_inventory']")
   
            await browser.pause(2000)
            console.log(remove.isClickable())
            await remove.click()
         
           const carticon = await $("//a[@class='shopping_cart_link']");
           console.log('removeicon is' +await ( carticon.getText()))
    
            await browser.pause(2000)
            const back = await $('#back-to-products')
            await back.click()
            break
        }
        else { console.log(await desc[i].getText()) }
    }
}
export const waittime = async (time) => {
   await browser.waitUntil( async ()=>(await browser.getTitle())==='Swag Labs',{timeout: time
    })
}