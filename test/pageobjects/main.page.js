const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get mainLogo () { return $('.b-top-logo a') }
    get weather () { return $('.top-informer-weather a') }
}

module.exports = new MainPage();
