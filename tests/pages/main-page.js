// main-page.ts
import { expect, Locator, Page } from '@playwright/test';

export class MainPage {   

  constructor(page) {
    this.page = page;    
    this.getSearch = page.locator('[class="MuiFormControl-root MuiTextField-root css-1pv2xcc"]');
    this.plusButton = page.locator('#tracklist > div > div:nth-child(1) > button');
    this.playList = page.locator('[id="playlist"]');
    this.checkBoxOne = page.locator('#tracklist > div > div:nth-child(2) > div.MuiGrid-root.MuiGrid-item.css-1wxaqej > span > input');
    this.checkBoxTwo = page.locator('#tracklist > div > div:nth-child(4) > div.MuiGrid-root.MuiGrid-item.css-1wxaqej > span > input');
    this.checkBoxThree = page.locator('#tracklist > div > div:nth-child(5) > div.MuiGrid-root.MuiGrid-item.css-1wxaqej > span > input');
    this.addTrackButton = page.locator('#tracklist > div > button');    
  } 

  async goto() {
    await this.page.goto('https://vite-react-alpha-lemon.vercel.app/');
  } 
  
}