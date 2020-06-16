"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const VerifyWidget_1 = require("./PageObjects/VerifyWidget");
describe('Protractor Element steps', () => {
    let vw = new VerifyWidget_1.VerifyWidgets();
    it('Chain Locators', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        // await browser.get('https://bijoux-signe-astro.myshopify.com/products/chargeur-a-induction-sans-fil');
        yield protractor_1.browser.get('https://blissfullybeautifulllc.org/products/crown-me-queen-jumpsuit');
        console.log("Hello");
        protractor_1.browser.sleep(3000);
        yield vw.reviewCount.getText().then(function (text) {
            console.log("Review count:  " + text);
        });
        yield vw.publishRating.getText().then(function (text) {
            console.log("Average Rating: " + text);
        });
        yield vw.publishCount.getText().then(function (text) {
            console.log("Publish count: " + text);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9UZXN0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFnRDtBQUVoRCw2REFBMkQ7QUFFM0QsUUFBUSxDQUFDLDBCQUEwQixFQUFDLEdBQUcsRUFBRTtJQUdyQyxJQUFLLEVBQUUsR0FBRyxJQUFJLDRCQUFhLEVBQUUsQ0FBQztJQUVqQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUMsR0FBUyxFQUFFO1FBRzFCLE1BQU8sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5Qyx3R0FBd0c7UUFDdEcsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO1FBQ3pGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFFaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUV0QyxDQUFDLENBQUMsQ0FBQTtRQUNKLE1BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBRWxELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUksSUFBSSxDQUFDLENBQUM7UUFFeEMsQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFJLElBQUksQ0FBQyxDQUFDO1FBRXZDLENBQUMsQ0FBQyxDQUFBO0lBRVAsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNMLENBQUMsQ0FBQyxDQUFBIn0=