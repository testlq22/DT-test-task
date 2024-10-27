import { expect, Locator, Page } from '@playwright/test';

export class SearchPage {
  
  

  constructor(page) {
    this.page = page;    
    this.searchResult = page.locator('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-1udb513"]');    
  }
  
}