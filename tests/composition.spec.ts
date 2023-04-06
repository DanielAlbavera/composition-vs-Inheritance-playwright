import { test, expect } from '@playwright/test';
import { LoginPage } from '../composition/login.page';
import { ProductsPage } from '../composition/products.page';
import { Header } from '../composition/header.component';

test.describe('Login Functinality by Composition pattern',  () => {

  let loginPage: LoginPage;
  let productPage: ProductsPage;
  let header: Header;
  const title: string = 'Swag Labs';

  test.beforeEach( async ({page}) => {
    loginPage = new LoginPage(page);
    productPage = new ProductsPage(page);
    header = new Header(page);
    await page.goto('');
    await page.waitForLoadState();
  });

  test.afterEach( async ({page}) => {
    await page.close();
  });

  test('Valid Logout', async ({page}) => {
    expect(await page.title()).toBe(title);
    await loginPage.usernameInput.fill('standard_user');
    await loginPage.passwordInput.fill('secret_sauce');
    await loginPage.loginButton.click();
    expect(await page.title()).toBe(title);
    expect(await productPage.title.isVisible()).toBeTruthy();
    await header.logout();
    expect(await page.title()).toBe(title);
    expect(await loginPage.loginButton.isVisible()).toBeTruthy();
  });

});