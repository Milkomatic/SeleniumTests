var assert = require('assert');

describe('wikipedia selenium page', function() {
    it('should have the title', function () {
        browser.url('https://en.wikipedia.org/wiki/Selenium_(software)');
        browser.pause(1000);
        browser.setValue('#simpleSearch #searchInput', 'JavaScript');
        browser.click('#simpleSearch #searchButton');
        browser.pause(1000);
        assert.equal(browser.getTitle(), 'JavaScript - Wikipedia');
    });
});