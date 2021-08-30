const MainPage = require('../pageobjects/main.page');
const ServicesPage = require('../pageobjects/services.page');

describe('My 1st hometask', async () => {
    it('Check logo href', async () => {
        await browser.url('https://www.onliner.by/');
        
        await expect(MainPage.mainLogo).toHaveHref('https://www.onliner.by/');
    });

    it('Check weather is clickable', async () => {
        const url = 'https://www.onliner.by/'
        await browser.url(url);

        await expect(MainPage.weather).toBeClickable();
    });

    it('Check button on hover', async () => {
        await browser.url(`https://s.onliner.by/tasks`);

        await expect(ServicesPage.mainButton).toHaveTextContaining('заказ');
    });
});
