describe('calcualtor_test',function(){


it('addition_test1',function(){

browser.get("http://juliemr.github.io/protractor-demo/");
browser.sleep(2000);
let a='6';
let b='5';
let add='11';
let sub=-1;

element(by.model('first')).sendKeys(a);
element(by.css('[ng-model="second"]')).sendKeys(b);
element(by.id('gobutton')).click();
let addresult=element(by.cssContainingText('.ng-binding','11')).getText();
expect(addresult).toEqual(add);

browser.sleep(1000);


});





});