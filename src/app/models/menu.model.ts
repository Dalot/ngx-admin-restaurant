import { Injectable } from '@angular/core';
import { Adapter } from '../adapters/adapter';

export class Menu {
    constructor(
      public name: string,
      public description: string,
      public price_menu: number,
      public url_image: string,
    ) { }
  }

@Injectable({
    providedIn: 'root'
})
export class MenuAdapter implements Adapter<Menu> {

  adapt(item: any): Menu {
    return new Menu(
      item.name,
      item.description,
      item.price_menu,
      item.url_image,
    );
  }
}