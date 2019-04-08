import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError, first } from 'rxjs/operators';
import { Food, FoodAdapter } from '../models/food.model';
import { DrinkAdapter, Drink } from '../models/drink.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
    private baseUrl = 'http://lex.dalot.xyz:8083';

    private currentFoodPageSubject: BehaviorSubject<string>;
    public currentFoodPage: Observable<string>;

    public paginationFoodData: any;
    public paginationDrinkData: any;
    public response: any;
    constructor(
      private http: HttpClient, 
      private foodAdapter: FoodAdapter, 
      private drinkAdapter: DrinkAdapter
      ) {
        //this.currentFoodPageSubject = new BehaviorSubject<string>(`${this.baseUrl}/api/products/foods?page=`);
        //this.currentFoodPage = this.currentFoodPageSubject.asObservable();
       }

    /*public get currentFoodPageValue(): any {
        return this.currentFoodPageSubject.value;
    }*/

    getFoods(): Observable<Food[]> {
        const url = `${this.baseUrl}/api/products/foods`;
        this.response = this.http.get(url);
        
        //this.paginationFoodData = this.response.pipe(first());
          // Adapt each item in the raw data array
        return this.response.pipe(
          map((data: any[]) => data['products'][0]['foods']['data'].map(item => this.foodAdapter.adapt(item))),
        );
    }
    getDrinks(): Observable<Drink[]> {
      const url = `${this.baseUrl}/api/products/drinks`;
      this.response = this.http.get(url)
      // this.paginationDrinkData = this.response.pipe(first());
        // Adapt each item in the raw data array
      return this.response.pipe(
        map((data: any[]) => data['products'][0]['drinks']['data'].map(item => this.drinkAdapter.adapt(item))),
      );
  }
}
