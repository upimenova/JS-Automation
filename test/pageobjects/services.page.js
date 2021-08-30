const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ServicesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get mainButton () { return $('a*=Разместить') }
}

module.exports = new ServicesPage();
