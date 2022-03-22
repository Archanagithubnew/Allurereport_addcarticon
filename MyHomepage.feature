Feature: The Internet Guinea Pig Website

    Scenario Outline: As a user, I can log into the sauce lab
        
        Given I am on the HomePage page <Homepageurl>
        
        When I login with <username> and <password>

        Then user should be able to click filter and select from <dropdown>
        Then user shouls be able to click on <Product> and add to cart
        Then user should be able to view appropriate number in cart symbol
         
   

        Examples:
      |       Homepageurl                | username      | password     | dropdown      | Product                           | RemoveProducts                    |
            | https://www.saucedemo.com/ | standard_user | secret_sauce | Name (Z to A) | Sauce Labs Fleece Jacket          | Sauce Labs Fleece Jacket          |
            | https://www.saucedemo.com/ | standard_user | secret_sauce | Name (Z to A) | Sauce Labs Onesie                 | Sauce Labs Onesie                 |
            | https://www.saucedemo.com/ | standard_user | secret_sauce | Name (Z to A) | Test.allTheThings() T-Shirt (Red) | Test.allTheThings() T-Shirt (Red) |
            
            
  Scenario Outline: 2. AS a user , i should be able to remove RemoveProducts
        Then  user should be able to remove the products using <RemoveProducts>

Examples:
 |RemoveProducts  |                  
 |Sauce Labs Fleece Jacket|
 |Sauce Labs Onesie |
 |Test.allTheThings() T-Shirt (Red)|
 