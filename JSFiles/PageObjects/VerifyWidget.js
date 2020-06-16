"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyWidgets = void 0;
const protractor_1 = require("protractor");
class VerifyWidgets {
    constructor() {
        this.reviewCount = protractor_1.element(protractor_1.by.cssContainingText('.brc_total-review-count', ''));
        this.publishRating = protractor_1.element(protractor_1.by.cssContainingText('.brc_average-rating-number', ''));
        this.publishCount = protractor_1.element(protractor_1.by.cssContainingText('.brc_review-count', ''));
    }
}
exports.VerifyWidgets = VerifyWidgets;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZ5V2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdHMvVmVyaWZ5V2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFzRDtBQUV0RCxNQUFhLGFBQWE7SUFNdEI7UUFFSSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0NBSUo7QUFmRCxzQ0FlQyJ9