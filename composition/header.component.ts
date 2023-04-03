import { Page, Locator } from '@playwright/test';

export class Header {

    readonly burguerButton: Locator;
    readonly cartButton: Locator;
    readonly sideBar: Object;

    constructor(page: Page) {
        this.burguerButton = page.locator('#react-burger-menu-btn');
        this.cartButton = page.locator('.shopping_cart_link');
        this.sideBar = {
            allItems: page.locator('#inventory_sidebar_link'),
            about: page.locator('#about_sidebar_link'),
            logout: page.locator('#logout_sidebar_link'),
            reset: page.locator('#reset_sidebar_link')
        }

    }

    async goToCart(): Promise<void> {
        await this.cartButton.click();
    }

    async logout(): Promise<void> {
        await this.burguerButton.click();
        await this.sideBar['logout'].click();
    }


}