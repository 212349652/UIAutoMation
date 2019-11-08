'use strict';
describe('Protractor baby steps', function () {

    it('Open Angular js website', function () {

        browser.get("https://angularjs.org");

        browser.get('http://juliemr.github.io/protractor-demo/');
        {
            console.log("I am the last step to execute");

        };

    });
    
    describe('Protractor Demo App', function () {
        it('should add one and two', function () {
           browser.get('http://juliemr.github.io/protractor-demo/');
            element(by.model('first')).sendKeys(1);
            element(by.model('second')).sendKeys(2);

            element(by.id('gobutton')).click();

            expect(element(by.binding('latest')).getText()).
                toEqual('3'); // This is wrong!
        });
    });
});
