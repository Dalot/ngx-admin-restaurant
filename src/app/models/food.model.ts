import { Injectable } from '@angular/core';
import { Adapter } from '../adapters/adapter';

export class Food {
    constructor(
      public name: string,
      public description: string,
      public price_food: number,
      public url_image: string,
    ) { }
  }

@Injectable({
    providedIn: 'root'
})
export class FoodAdapter implements Adapter<Food> {

  adapt(item: any): Food {
    return new Food(
      item.name,
      item.description,
      item.price_food,
      item.url_image,
    );
  }
}