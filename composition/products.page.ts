import { Page, Locator } from '@playwright/test';

export class ProductsPage {

    readonly title: Locator;

    constructor(page: Page) {
        this.title = page.locator('.title');
    }

}