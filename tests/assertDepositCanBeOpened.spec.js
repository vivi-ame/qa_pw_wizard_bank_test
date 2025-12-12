import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Assert the deposit can be opened', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
    await page.locator('#userSelect').selectOption('Harry Potter');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.getByRole('button', {name: 'Deposit'}).click();

    const amount = faker.number.int(100).toString();
    await page.getByPlaceholder('amount').fill(amount);

    // await page.locator('button[type="submit"]').and (page.getByText('Deposit')).click();
    await page.locator('button[type="submit"]:has-text("Deposit")').click();

    await expect(page.getByText('Deposit Successful')).toBeVisible();
    await expect(page.getByText(`, Balance : ${amount}`)).toBeVisible();
    await page.getByRole('button', {name: 'Transactions'}).click();

    await expect(page.locator('thead')).toBeVisible();
    await page.reload();

    const tableRowOne = page.locator('#anchor0');
    await expect(tableRowOne.getByText(`${amount}`)).toBeVisible();
    await expect(tableRowOne.getByText('Credit')).toBeVisible();

  });
