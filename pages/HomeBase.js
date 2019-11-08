var HomeBase = function () {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    this.get = function () {
        browser.get(URL);
    };
    this.setName = function (name) {
        nameInput.sendKeys(name);
    };
    this.firstNumSendKeys = function (num) {
        firstNumber.sendKeys(num);
    };
    this.firstNumSendKeys = function (num) {
        secondNumber.sendKeys(num);
    };
}
module.export = new HomeBase();