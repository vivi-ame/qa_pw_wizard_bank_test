import { test, expect } from '@playwright/test';

test('Assert customer has correct bank data', async ({ page }) => {
 await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
 await page.locator('#userSelect').selectOption('Hermoine Granger');
 await page.getByRole('button', {name: 'Login'}).click();

 await expect(page.locator('#accountSelect')).toBeVisible();
 await expect(page.getByText("Account Number : ")).toBeVisible();
 await expect(page.getByText(", Balance : ")).toBeVisible();
 await expect(page.getByText(" , Currency : ")).toBeVisible();
});