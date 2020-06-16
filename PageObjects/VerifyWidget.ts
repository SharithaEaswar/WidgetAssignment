import { ElementFinder,element, by } from "protractor"

export class VerifyWidgets
{
    reviewCount:ElementFinder;
    publishRating:ElementFinder;
    publishCount:ElementFinder;

    constructor()
    {
        this.reviewCount=  element(by.cssContainingText('.brc_total-review-count', ''));
        this.publishRating = element(by.cssContainingText('.brc_average-rating-number', ''));
        this.publishCount = element(by.cssContainingText('.brc_review-count', ''));
    }



}