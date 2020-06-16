import { Given,When, Then  } from "cucumber";
import { browser } from "protractor";
import { VerifyWidgets } from "../PageObjects/VerifyWidget";
import chai from "chai";

let vw = new VerifyWidgets(); 
var expect = chai.expect;
Given('For {string} navigate to website {string}', async (string, string2) => {
  console.log("inside steps")
  // Write code here that turns the phrase above into concrete actions
  await  browser.waitForAngularEnabled(false);
  await browser.get(string2);
  await browser.sleep(4000);
  // Write code here that turns the phrase above into concrete actions
  
      });

  
      When('check for ratingwidget flag', function () {
        // Write code here that turns the phrase above into concrete actions
        //return 'pending';
      });

      Then('If rating flag {string} yes, output of  publish Average should be  {string}', async (string, string2) => {
    // Write code here that turns the phrase above into concrete actions
    if(string == 'Y')
    {
    await  vw.publishRating.getText().then(function(text)
    {
      var rrating :string = text;
      var srating = rrating.split(" ", 1);
      
    expect(parseFloat(srating.toString())).to.equal(parseFloat(string2))
    })

     }
     else 
     return 'pending';
    });

  When('check for the reviewcount flag', async () => {
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
  });
  
  Then('if review flag  is yes {string} output of  publish Count should be  {string}', async (string, string2) =>{
    if(string == 'Y')
    {
    await  vw.publishCount.getText().then(function(text)
        {
          var snum: number = parseFloat(text.split(" ", 1).toString());
         expect(snum).to.equal(parseFloat(string2));
        })

      }
      else 
      return 'pending';
  });

  When('check for the review count', async  => {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
  });

  Then('the output of review count should be  {string}', async (string)  => {

    
    // Write code here that turns the phrase above into concrete actions
      await  vw.reviewCount.getText().then(function(text)
         {
           
         // var rcount :string = text;
         // var srcount  =rcount.split(" ", 1);
         //comes as 1 review from browser
          var snum: number = parseFloat(text.split(" ", 1).toString());
         expect(snum).to.equal(parseFloat(string));
         console.log("Review feature:  " + string);
         console.log("Review count:  " + text);
        console.log("convertes to number " + snum);
        })
 });