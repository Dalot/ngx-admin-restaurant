import { Component } from '@angular/core';
import { ProductsPostsService } from './products-posts.service';
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
  constructor(private productsService: ProductsPostsService, private productService: ProductService) {
    //this.currentFoodPageData = this.productService.currentFoodPageValue;
    this.productService.currentFoodPage.subscribe(x => this.currentFoodPageData = x);
    this.productService.currentDrinkPage.subscribe(x => this.currentDrinkPageData = x);
    this.productService.currentMenuPage.subscribe(x => this.currentMenuPageData = x);

    this.foodCard = {
      products: [],
      placeholders: [],
      loading: false,
      pageToLoadNext: '',
      currentPageNumber: 1,
      total_pages: 2,
    };
    this.drinkCard = {
      products: [],
      placeholders: [],
      loading: false,
      pageToLoadNext: '',
      currentPageNumber: 1,
      total_pages: 2,
    };
    this.menuCard = {
      products: [],
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
    
    this.productsService.loadFoods(cardData.pageToLoadNext, cardData.currentPageNumber, this.pageSize, cardData.totalPages)
      .subscribe(nextProducts => {
        cardData.placeholders = [];
        cardData.products.push(...nextProducts);
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
    
    this.productsService.loadDrinks(cardData.pageToLoadNext, cardData.currentPageNumber, this.pageSize, cardData.totalPages)
      .subscribe(nextProducts => {
        cardData.placeholders = [];
        cardData.products.push(...nextProducts);
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
    
    this.productsService.loadMenus(cardData.pageToLoadNext, cardData.currentPageNumber, this.pageSize, cardData.totalPages)
      .subscribe(nextProducts => {
        cardData.placeholders = [];
        cardData.products.push(...nextProducts);
        cardData.loading = false;
        cardData.currentPageNumber = this.currentMenuPageData['products'][0]['menus'].current_page;
        cardData.pageToLoadNext = this.currentMenuPageData['products'][0]['menus'].next_page_url;
        cardData.totalPages = this.currentMenuPageData['products'][0]['menus'].last_page;
      });
  }
  
  
}
