import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Food, FoodAdapter } from '../models/food.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private baseUrl = 'http://lex.dalot.xyz:8083';

    constructor(private http: HttpClient, private adapter: FoodAdapter,) { }
  
    getFoods(): Observable<Food[]> {
        const url = `${this.baseUrl}/api/products/foods`;
        return this.http.get(url).pipe(
          // Adapt each item in the raw data array
          map((data: any[]) => data['foods']['data'].map(item => this.adapter.adapt(item))),
        );
    }
}