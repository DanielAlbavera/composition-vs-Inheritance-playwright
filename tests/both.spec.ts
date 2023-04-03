import { test, expect } from '@playwright/test';
import { LoginPage } from '../inheritance/login.page';
import { ProductsPage } from '../inheritance/products.page';
import { Header } from '../composition/header.component';

test.describe('Login Functinality by Both',  () => {

  let loginPage: LoginPage;
  let productPage: ProductsPage;
  let header: Header;
  const title: string = 'Swag Labs';

  test.beforeEach( async ({page}) => {
    loginPage = new LoginPage(page);
    productPage = new ProductsPage(page);
    header = new Header(page);
    await page.goto('');
  })

  test('Valid Logout', async ({page}) => {
    expect(await loginPage.getTitle()).toBe(title);
    await loginPage.login();
    expect(await productPage.getTitle()).toBe(title);
    expect(await productPage.isTitleVIsible()).toBeTruthy();
    await header.logout();
    expect(await loginPage.getTitle()).toBe(title);
    expect(await loginPage.isLoginButtonVisible()).toBeTruthy();
  });

});