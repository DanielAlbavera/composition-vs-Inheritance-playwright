import { Page } from "playwright";

export abstract class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(path: string): Promise<void> {
        await this.page.goto(`/${path}`);
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

}