import { Injectable } from '@angular/core';
import { Adapter } from '../adapters/adapter';

export class Drink {
    constructor(
      public name: string,
      public description: string,
      public price_drink: number,
      public url_image: string,
    ) { }
  }

@Injectable({
    providedIn: 'root'
})
export class DrinkAdapter implements Adapter<Drink> {

  adapt(item: any): Drink {
    return new Drink(
      item.name,
      item.description,
      item.price_drink,
      item.url_image,
    );
  }
}