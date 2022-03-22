import { removeprod, selectprod } from "../utils/commands";
import report from '@wdio/allure-reporter';


class Homepage  {
  
    async titlehome() {
        const title = await $('.title')
        return title
    }
  
    async dropdown() {
        await (await $("//select[@class='product_sort_container']")).selectByIndex(0)
        await browser.pause(3000)
    }
    async name() {
        const name = await $$("//div[@class='inventory_item_name']")
        console.log(name.length)
        for (let i = 0; i < name.length; i++) {
            const actuallist = await name[i].getText();
            console.log(await name[i].getText());
        }
    }

    async listofoptions() {
        const list = await $$("//div[@class='inventory_item_name']")
        return list
    }

    async iteratethroughlist(list) {
        this.list = list
        for (let i = 0; i < list.length; i++) {
            console.log(list[i].getText())
        }
    }

    async selectoptions(product) {
        this.product=product
        await selectprod(product)
    }
    async checkpage(name) {
        return await $("//div[@class='inventory_details_name large_size']")
    }
    async carticon() {

        const back = await $("//button[@id='back-to-products']")
        await back.click()
        const carticon = await $("//a[@class='shopping_cart_link']");
        const icon = await( carticon.getText());
        report.addStep(`number is ${icon}`)     
    }
    async remove(removeproducts) {
        this.removeproducts=removeproducts
        await removeprod(removeproducts)
    }   
} export default new Homepage();