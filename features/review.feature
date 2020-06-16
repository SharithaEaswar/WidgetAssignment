Feature: I am going to verify rating and review widget
@widgetTesting


Scenario Outline:  verify publish average, publish count and review count
Given For "<Sku>" navigate to website "<URL>" 
When check for ratingwidget flag 
Then  If rating flag "<RatWidget>" yes, output of  publish Average should be  "<PubAvg>"
When check for the reviewcount flag
Then  if review flag  is yes "<RevWidget>" output of  publish Count should be  "<Pubcount>" 
Then  the output of review count should be  "<RevCount>" 

Examples:
|Sku|PubAvg|Pubcount|RevCount|URL|RatWidget|RevWidget|Remarks|
|5075133530247|4|1|3|https://www.attractech-shop.com/products/chargeur-a-induction-sans-fil|Y|Y||
|4522765942871|4|1|1|https://blissfullybeautifulllc.org/products/crown-me-queen-jumpsuit|Y|Y||
|5075133530247|4|1|3|https://www.attractech-shop.com/products/chargeur-a-induction-sans-fil|N|N||
|4522765942871|4|2|1|https://blissfullybeautifulllc.org/products/crown-me-queen-jumpsuit|Y|Y||
