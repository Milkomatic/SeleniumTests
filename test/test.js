var assert = require('assert');

var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

describe('wikipedia selenium page', function() {
    it('should have the title', function () {
        browser.url('https://en.wikipedia.org/wiki/Selenium_(software)');

        assert.equal($('#firstHeading').getText(), 'Selenium (software)');
    });
    it('should have contents', function () {
        browser.url('https://en.wikipedia.org/wiki/Selenium_(software)');
        var resultsLvOne = $$('#toc ul .toclevel-1')
        assert.equal(resultsLvOne.length, 5);

        var resultsLvTwo = $$('#toc ul .toclevel-2')
        assert.equal(resultsLvTwo.length, 5);

        var resultsTotal = $$('#toc ul li')
        assert.equal(resultsTotal.length, 10);
    });
});