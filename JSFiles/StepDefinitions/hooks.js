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
cucumber_1.Before({ tags: "@widgetTesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    // browser.mange().window().maximize();
    protractor_1.browser.manage().window().maximize();
    console.log("before test");
});
cucumber_1.After(function (Scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before scenarios tagged with @foo
        // browser.mange().window().maximize();
        //browser.mange().window().open();
        console.log(" ALLTest complete");
        if (Scenario.result.status == cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBK0M7QUFDL0MsMkNBQXFDO0FBR3JDLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMsRUFBRTtJQUM3QiwrREFBK0Q7SUFDaEUsdUNBQXVDO0lBR3ZDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUMzQixDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsVUFBZ0IsUUFBUTs7UUFDNUIsK0RBQStEO1FBQ2hFLHVDQUF1QztRQUV0QyxrQ0FBa0M7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUUsaUJBQU0sQ0FBQyxNQUFNLEVBQ3pDO1lBQ0UsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBRSxDQUFDO1NBRXRDO0lBQ0gsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9