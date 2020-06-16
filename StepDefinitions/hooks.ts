import {After, Before, Status} from "cucumber";
import { browser } from "protractor";
import fs from 'fs';

Before({tags: "@widgetTesting"}, function () {
    // This hook will be executed before scenarios tagged with @foo
   // browser.mange().window().maximize();
   

   browser.manage().window().maximize();

   console.log("before test")
  });

  After(async function (Scenario) {
    // This hook will be executed before scenarios tagged with @foo
   // browser.mange().window().maximize();
  
    //browser.mange().window().open();
    console.log(" ALLTest complete");
    if (Scenario.result.status==Status.FAILED)
    {
      const screenshot = await browser.takeScreenshot();
      this.attach(screenshot,"image/png" );
  
    }
  });