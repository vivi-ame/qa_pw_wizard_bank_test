import { test, expect } from '@playwright/test';

test('Assert the empty transactions list has correct values', async ({
  page,
}) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  await page.locator('#userSelect').selectOption('Albus Dumbledore');
  await page.getByRole('button', {name: 'Login'}).click();
  await page.getByRole('button', {name: 'Transactions'}).click();
  
  const tableHeader = page.locator('thead');
  await expect(tableHeader.getByText('Date-Time')).toBeVisible();
  await expect(tableHeader.getByText('Amount')).toBeVisible();
  await expect(tableHeader.getByText('Transaction Type')).toBeVisible();

  await expect(page.locator('#anchor0')).toBeHidden();

});
