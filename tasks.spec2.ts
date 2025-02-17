import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'

test('deve poder cadastrar uma nova tarefa', async ({ page, request }) => {

  // Dado que eu tenho uma nova tarefa
  const taskName = 'WiliamAguirre'

  // E que estou na página de cadastro
  await page.goto('http://google.com')

  // Quando faço o cadastro dessa tarefa
  const inputTaskName = page.locator('textarea[title*=Pesquisar]')
  await inputTaskName.fill('WiliamAguirre')

  const event = new KeyboardEvent("keydown", { key: "Enter" });
  document.dispatchEvent(event);

  // Então essa tarefa deve ser exibida na lista
  const target = page.locator('css=.taskt-item p >> text=${taskName}')

  await expect(target).tobeVisible()
})