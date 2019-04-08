import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map, first } from 'rxjs/operators';
import { Food } from '../../../models/food.model';
import { ProductService } from '../../../services/product.service';
import { Drink } from '../../../models/drink.model';

const TOTAL_PAGES = 7;


@Injectable()
export class NewsService {
    currentFoodPage: any;

    constructor(private http: HttpClient, private productService: ProductService) {
        //this.currentFoodPage = this.productService.currentFoodPageValue;
    }

  loadFoods(page: number, pageSize: number): Observable<Food[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;
    
    return this.productService.getFoods().pipe(
        map(foods => foods.splice(startIndex, pageSize)),
            delay(1500),
        );
  }
  loadDrinks(page: number, pageSize: number): Observable<Drink[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;
    
    return this.productService.getDrinks().pipe(
        map(drinks => drinks.splice(startIndex, pageSize)),
            delay(1500),
        );
  }
  
}