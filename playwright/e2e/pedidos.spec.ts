import { test, expect } from '@playwright/test'

// AAA - Arrange, Act, Assert


test('deve consultar um pedido aprovado', async ({ page }) => {
  // Arrange
  await page.goto('http://localhost:5173/')
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')

  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  //act
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-LQ5OS6')
  await page.getByRole('button', { name: 'Buscar Pedido' }).click();


  //assert

  await expect(page.getByText('Pedido', { exact: true })).toBeVisible({ timeout: 10_000 })
  await expect(page.getByText('Pedido', { exact: true })).toContainText('Pedido')

  await expect(page.getByText('APROVADO')).toBeVisible({ timeout: 10_000 })
  await expect(page.getByText('APROVADO')).toContainText('APROVADO')

})
