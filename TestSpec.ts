import {browser, element, by} from "protractor";
import {async} from "q";
import { VerifyWidgets } from "./PageObjects/VerifyWidget";

describe('Protractor Element steps',() =>
 {  

    let  vw = new VerifyWidgets();

	it('Chain Locators',async () =>
	 {
       
      await  browser.waitForAngularEnabled(false);

    // await browser.get('https://bijoux-signe-astro.myshopify.com/products/chargeur-a-induction-sans-fil');
      await browser.get('https://blissfullybeautifulllc.org/products/crown-me-queen-jumpsuit');
      console.log("Hello");
      browser.sleep(3000);
      await  vw.reviewCount.getText().then(function(text)
         {
        console.log("Review count:  " + text);
        
        })
      await  vw.publishRating.getText().then(function(text)
        {
        console.log("Average Rating: " +  text);
       
        })
        await  vw.publishCount.getText().then(function(text)
        {
        console.log("Publish count: " +  text);
       
        })
   
	  })
})