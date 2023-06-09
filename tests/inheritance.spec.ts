import { test, expect } from '@playwright/test';
import { LoginPage } from '../inheritance/login.page';
import { ProductsPage } from '../inheritance/products.page';

test.describe('Login Functinality by Inheritance pattern',  () => {

  let loginPage: LoginPage;
  let productPage: ProductsPage;
  const title: string = 'Swag Labs';

  test.beforeEach( async ({page}) => {
    loginPage = new LoginPage(page);
    productPage = new ProductsPage(page);
    await loginPage.navigate('');
    await page.waitForLoadState();
  });

  test.afterEach( async ({page}) => {
    await page.close();
  });

  test('Valid Login', async () => {
    expect(await loginPage.getTitle()).toBe(title);
    await loginPage.login();
    expect(await productPage.getTitle()).toBe(title);
    expect(await productPage.isTitleVIsible()).toBeTruthy();
  });

});