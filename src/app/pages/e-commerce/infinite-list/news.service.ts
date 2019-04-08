import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map, first } from 'rxjs/operators';
import { Food } from '../../../models/food.model';
import { ProductService } from '../../../services/product.service';
import { Drink } from '../../../models/drink.model';
import { Menu } from '../../../models/menu.model';




@Injectable()
export class NewsService {
    currentFoodPage: any;

    constructor(private http: HttpClient, private productService: ProductService) {
        this.currentFoodPage = this.productService.currentFoodPageValue;
    }

  loadFoods(nextPage:string, page: number, pageSize: number, total_pages:number): Observable<Food[]> {
    const startIndex = ((page - 1) % total_pages) * pageSize;
    return this.productService.getFoods(nextPage).pipe(
        map(foods => foods.splice(startIndex, pageSize)),
            delay(1500),
        );
  }
  loadDrinks(nextPage:string, page: number, pageSize: number, total_pages:number): Observable<Drink[]> {
    const startIndex = ((page - 1) % total_pages) * pageSize;
    return this.productService.getDrinks(nextPage).pipe(
        map(drinks => drinks.splice(startIndex, pageSize)),
            delay(1500),
        );
  }
  loadMenus(nextPage:string, page: number, pageSize: number, total_pages:number): Observable<Menu[]> {
    const startIndex = ((page - 1) % total_pages) * pageSize;
    return this.productService.getMenus(nextPage).pipe(
        map(drinks => drinks.splice(startIndex, pageSize)),
            delay(1500),
        );
  }
  
}