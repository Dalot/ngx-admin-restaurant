import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Food } from '../../models/Food';
import { first } from 'rxjs/operators';




@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit{
  protected foods: Food[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getFoods().pipe(first()).subscribe( (res) => {
      this.foods = res;
    })
   
  }
}
