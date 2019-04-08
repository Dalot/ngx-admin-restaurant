import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError, first } from 'rxjs/operators';
import { Food, FoodAdapter } from '../models/food.model';
import { DrinkAdapter, Drink } from '../models/drink.model';
import { MenuAdapter, Menu } from '../models/menu.model';
import { environment as env } from '../../environments/environment' ;

export class Pagination {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total:number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   

    private currentFoodPageSubject: BehaviorSubject<Pagination>;
    public currentFoodPage: Observable<Pagination>;
    private currentDrinkPageSubject: BehaviorSubject<Pagination>;
    public currentDrinkPage: Observable<Pagination>;
    private currentMenuPageSubject: BehaviorSubject<Pagination>;
    public currentMenuPage: Observable<Pagination>;

    public paginationFoodData: any;
    public paginationDrinkData: any;
    public paginationMenuData: any;
    public response: any;
    constructor(
      private http: HttpClient, 
      private foodAdapter: FoodAdapter, 
      private drinkAdapter: DrinkAdapter,
      private menuAdapter: MenuAdapter
      ) {
        this.currentFoodPageSubject = new BehaviorSubject<Pagination>(new Pagination);
        this.currentFoodPage = this.currentFoodPageSubject.asObservable();

        this.currentDrinkPageSubject = new BehaviorSubject<Pagination>(new Pagination);
        this.currentDrinkPage = this.currentDrinkPageSubject.asObservable();

        this.currentMenuPageSubject = new BehaviorSubject<Pagination>(new Pagination);
        this.currentMenuPage = this.currentMenuPageSubject.asObservable();
       }

    public get currentFoodPageValue(): any {
        return this.currentFoodPageSubject.value;
    }

    public get currentDrinkPageValue(): any {
      return this.currentDrinkPageSubject.value;
    }

    public get currentMenuPageValue(): any {
      return this.currentMenuPageSubject.value;
    }

    getFoods(url): Observable<Food[]> {
      (url == '' ? url = `${env.apiUrl}api/products/foods` : url);
      console.log(url);
        this.response = this.http.get(url);
   
        this.response.pipe(first()).subscribe(data => {
          //this.paginationFoodData = data;
          this.currentFoodPageSubject.next(data);
        });
       
          // Adapt each item in the raw data array
        return this.response.pipe(
          map((data: any[]) => data['products'][0]['foods']['data'].map(item => this.foodAdapter.adapt(item))),
        );
    }
    getDrinks(url): Observable<Drink[]> {
      (url == '' ? url = 'http://lex.dalot.xyz:8083/api/products/drinks' : url);
      console.log(url);
        this.response = this.http.get(url);
   
        this.response.pipe(first()).subscribe(data => {
          //this.paginationDrinkData = data;
          this.currentDrinkPageSubject.next(data);
        });
       
          // Adapt each item in the raw data array
        return this.response.pipe(
          map((data: any[]) => data['products'][0]['drinks']['data'].map(item => this.foodAdapter.adapt(item))),
        );
    }
    getMenus(url): Observable<Menu[]> {
      (url == '' ? url = 'http://lex.dalot.xyz:8083/api/products/menus' : url);
      console.log(url);
        this.response = this.http.get(url);
   
        this.response.pipe(first()).subscribe(data => {
          //this.paginationMenuData = data;
          this.currentMenuPageSubject.next(data);
        });
       
          // Adapt each item in the raw data array
        return this.response.pipe(
          map((data: any[]) => data['products'][0]['menus']['data'].map(item => this.menuAdapter.adapt(item))),
        );
    }
}
