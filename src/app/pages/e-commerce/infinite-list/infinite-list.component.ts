import { Component } from '@angular/core';
import { NewsService } from './news.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'ngx-infinite-list',
  templateUrl: 'infinite-list.component.html',
  styleUrls: ['infinite-list.component.scss'],
})
export class InfiniteListComponent {
  private currentFoodPageData: any;
  private currentDrinkPageData: any;
  private currentMenuPageData: any;
  pageSize = 10;
  foodCard: any;
  drinkCard: any;
  menuCard: any;
  constructor(private newsService: NewsService, private productService: ProductService) {
    //this.currentFoodPageData = this.productService.currentFoodPageValue;
    this.productService.currentFoodPage.subscribe(x => this.currentFoodPageData = x);
    this.productService.currentDrinkPage.subscribe(x => this.currentDrinkPageData = x);
    this.productService.currentMenuPage.subscribe(x => this.currentMenuPageData = x);

    this.foodCard = {
      news: [],
      placeholders: [],
      loading: false,
      pageToLoadNext: '',
      currentPageNumber: 1,
      total_pages: 2,
    };
    this.drinkCard = {
      news: [],
      placeholders: [],
      loading: false,
      pageToLoadNext: '',
      currentPageNumber: 1,
      total_pages: 2,
    };
    this.menuCard = {
      news: [],
      placeholders: [],
      loading: false,
      pageToLoadNext: '',
      currentPageNumber: 1,
      total_pages: 2,
    };
  }

 
  
  

  loadNextFoods(cardData) {
    if (cardData.loading || cardData.total_pages === cardData.currentPageNumber) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    
    this.newsService.loadFoods(cardData.pageToLoadNext, cardData.currentPageNumber, this.pageSize, cardData.totalPages)
      .subscribe(nextNews => {
        cardData.placeholders = [];
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.currentPageNumber = this.currentFoodPageData['products'][0]['foods'].current_page;
        cardData.pageToLoadNext = this.currentFoodPageData['products'][0]['foods'].next_page_url;
        cardData.totalPages = this.currentFoodPageData['products'][0]['foods'].last_page;
      });
  }
  loadNextDrinks(cardData) {
    if (cardData.loading || cardData.total_pages === cardData.currentPageNumber) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    
    this.newsService.loadDrinks(cardData.pageToLoadNext, cardData.currentPageNumber, this.pageSize, cardData.totalPages)
      .subscribe(nextNews => {
        cardData.placeholders = [];
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.currentPageNumber = this.currentDrinkPageData['products'][0]['drinks'].current_page;
        cardData.pageToLoadNext = this.currentDrinkPageData['products'][0]['drinks'].next_page_url;
        cardData.totalPages = this.currentDrinkPageData['products'][0]['drinks'].last_page;
      });
  }
  loadNextMenus(cardData) {
    if (cardData.loading || cardData.total_pages === cardData.currentPageNumber) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    
    this.newsService.loadMenus(cardData.pageToLoadNext, cardData.currentPageNumber, this.pageSize, cardData.totalPages)
      .subscribe(nextNews => {
        cardData.placeholders = [];
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.currentPageNumber = this.currentMenuPageData['products'][0]['menus'].current_page;
        cardData.pageToLoadNext = this.currentMenuPageData['products'][0]['menus'].next_page_url;
        cardData.totalPages = this.currentMenuPageData['products'][0]['menus'].last_page;
      });
  }
  
  
}
