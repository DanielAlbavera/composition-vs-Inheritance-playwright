import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductsPage extends BasePage {

    readonly title: Locator;

    constructor(page: Page) {
        super(page);
        this.title = page.locator('.title');
    }

    async isTitleVIsible(): Promise<boolean> {
        return await this.title.isVisible();
    }

}