import { test, expect } from '@playwright/test';
import { MainPage } from './pages/main-page';
import { SearchPage } from './pages/search-page';

test.describe("navigation", () => {
    test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();    
  });


test('Should check "Search" function', async ({ page }) => {
  const mainPage = new MainPage(page);
  const searchPage = new SearchPage(page);  
  await mainPage.getSearch.click();
  await mainPage.getSearch.type('Winter');
  await mainPage.getSearch.press('Enter');  
  await expect(searchPage.searchResult).toContainText('Winter'); 
});

test('Should check "Plus" button', async ({ page }) => {
  const mainPage = new MainPage(page);  
  await mainPage.plusButton.click();  
  await expect(mainPage.playList).toContainText('Summer');  
});

test('Should check multiple adding', async ({ page }) => {
  const mainPage = new MainPage(page);  
  await mainPage.checkBoxOne.click();
  await mainPage.checkBoxTwo.click();
  await mainPage.checkBoxThree.click();
  await mainPage.addTrackButton.click();
  await expect(mainPage.playList).toContainText('Autumn' , 'Spring' , 'Rainy');   
}); 
});