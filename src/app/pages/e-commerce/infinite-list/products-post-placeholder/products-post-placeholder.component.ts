import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ngx-products-post-placeholder',
  templateUrl: 'products-post-placeholder.component.html',
  styleUrls: ['products-post-placeholder.component.scss'],
})
export class ProductsPostPlaceholderComponent {

  @HostBinding('attr.aria-label')
  label = 'Loading';
}
