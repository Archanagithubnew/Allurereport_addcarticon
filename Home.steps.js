import {Given , When , Then} from '@cucumber/cucumber';
import Homepagemethod from '../../src/pages/MyHome.page';
import loginpagemethod from '../../src/pages/MyLogin.Page';
import mypage from '../../src/pages/MyPage';
import report from '@wdio/allure-reporter';
const assert = require('assert');
    
    Given(/^I am on the HomePage page (.+)$/, async function (homepageurl) {
       // await browser.url(homepageurl)
       await mypage.LoginPage()
      
        //await browser.maximizeWindow()
        //await browser.pause(2000)

    });
    When(/^I login with (.+) and (.+)$/, async function (username, password){
      const user =await (loginpagemethod.username)
      await user.setValue(username)
      const pass= await (loginpagemethod.password)
      await pass.setValue(password)
      await loginpagemethod.login()
       await browser.pause(3000)

    });
    Then(/^user should be able to click filter and select from (.+)$/, async function (dropdown)
    {
    await Homepagemethod.dropdown()
   
    await browser.pause(2000)
 
    });
  
    Then(/^user shouls be able to click on (.+) and add to cart$/, async function (product) {
      
    await  Homepagemethod.selectoptions(product)
    await browser.pause(2000)
    });
    Then(/^user should be able to view appropriate number in cart symbol$/, async ()=> {
      await Homepagemethod.carticon();
       await browser.pause(1000)
      });
       Then(/^user should be able to remove the products using (.+)$/,async function (removeproducts){
         await Homepagemethod.remove(removeproducts)
         await Homepagemethod.carticon();
         await browser.pause(1000)
       
    });
 
  
  