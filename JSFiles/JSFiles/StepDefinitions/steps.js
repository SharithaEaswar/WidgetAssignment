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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const VerifyWidget_1 = require("../PageObjects/VerifyWidget");
let vw = new VerifyWidget_1.VerifyWidgets();
cucumber_1.Given('Will navigate to website {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get(string);
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.When('check for the review count', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
});
cucumber_1.Then('the output of publish rating should be  {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield vw.reviewCount.getText().then(function (text) {
        console.log("Review count:  " + text);
    });
    yield vw.reviewRating.getText().then(function (text) {
        console.log("Average Rating: " + text);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFDO0FBQ3JDLDhEQUE0RDtBQUU1RCxJQUFJLEVBQUUsR0FBRyxJQUFJLDRCQUFhLEVBQUUsQ0FBQztBQUM3QixnQkFBSyxDQUFDLG1DQUFtQyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDeEQsb0VBQW9FO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUzQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLDRCQUE0QixFQUFFO0lBQ2pDLG9FQUFvRTtJQUNwRSxtQkFBbUI7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsa0RBQWtELEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUN4RSxvRUFBb0U7SUFDcEUsTUFBTyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFFOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUV0QyxDQUFDLENBQUMsQ0FBQTtJQUNKLE1BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBRWpELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUksSUFBSSxDQUFDLENBQUM7SUFFeEMsQ0FBQyxDQUFDLENBQUE7QUFFUixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=