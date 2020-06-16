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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const VerifyWidget_1 = require("../PageObjects/VerifyWidget");
const chai_1 = __importDefault(require("chai"));
let vw = new VerifyWidget_1.VerifyWidgets();
var expect = chai_1.default.expect;
cucumber_1.Given('For {string} navigate to website {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("inside steps");
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get(string2);
    yield protractor_1.browser.sleep(4000);
    // Write code here that turns the phrase above into concrete actions
}));
cucumber_1.When('check for ratingwidget flag', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
});
cucumber_1.Then('If rating flag {string} yes, output of  publish Average should be  {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == 'Y') {
        yield vw.publishRating.getText().then(function (text) {
            var rrating = text;
            var srating = rrating.split(" ", 1);
            expect(parseFloat(srating.toString())).to.equal(parseFloat(string2));
        });
    }
    else
        return 'pending';
}));
cucumber_1.When('check for the reviewcount flag', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
}));
cucumber_1.Then('if review flag  is yes {string} output of  publish Count should be  {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == 'Y') {
        yield vw.publishCount.getText().then(function (text) {
            var snum = parseFloat(text.split(" ", 1).toString());
            expect(snum).to.equal(parseFloat(string2));
        });
    }
    else
        return 'pending';
}));
cucumber_1.When('check for the review count', async => {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
});
cucumber_1.Then('the output of review count should be  {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield vw.reviewCount.getText().then(function (text) {
        // var rcount :string = text;
        // var srcount  =rcount.split(" ", 1);
        //comes as 1 review from browser
        var snum = parseFloat(text.split(" ", 1).toString());
        expect(snum).to.equal(parseFloat(string));
        console.log("Review feature:  " + string);
        console.log("Review count:  " + text);
        console.log("convertes to number " + snum);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFDO0FBQ3JDLDhEQUE0RDtBQUM1RCxnREFBd0I7QUFFeEIsSUFBSSxFQUFFLEdBQUcsSUFBSSw0QkFBYSxFQUFFLENBQUM7QUFDN0IsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixnQkFBSyxDQUFDLDJDQUEyQyxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDM0Isb0VBQW9FO0lBQ3BFLE1BQU8sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsb0VBQW9FO0FBRWhFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsNkJBQTZCLEVBQUU7SUFDbEMsb0VBQW9FO0lBQ3BFLG1CQUFtQjtBQUNyQixDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw2RUFBNkUsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUNoSCxvRUFBb0U7SUFDcEUsSUFBRyxNQUFNLElBQUksR0FBRyxFQUNoQjtRQUNBLE1BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBRWxELElBQUksT0FBTyxHQUFXLElBQUksQ0FBQztZQUMzQixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV0QyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNwRSxDQUFDLENBQUMsQ0FBQTtLQUVBOztRQUVELE9BQU8sU0FBUyxDQUFDO0FBQ2xCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFTCxlQUFJLENBQUMsZ0NBQWdDLEVBQUUsR0FBUyxFQUFFO0lBQ2hELG9FQUFvRTtJQUNyRSxvQkFBb0I7QUFDckIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw4RUFBOEUsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUM3RyxJQUFHLE1BQU0sSUFBSSxHQUFHLEVBQ2hCO1FBQ0EsTUFBTyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFFN0MsSUFBSSxJQUFJLEdBQVcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUE7S0FFSDs7UUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFLEtBQUssQ0FBRSxFQUFFO0lBQzFDLG9FQUFvRTtJQUNwRSxtQkFBbUI7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0RBQWdELEVBQUUsQ0FBTyxNQUFNLEVBQUcsRUFBRTtJQUd2RSxvRUFBb0U7SUFDbEUsTUFBTyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFHL0MsNkJBQTZCO1FBQzdCLHNDQUFzQztRQUN0QyxnQ0FBZ0M7UUFDL0IsSUFBSSxJQUFJLEdBQVcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUE7QUFDVCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=