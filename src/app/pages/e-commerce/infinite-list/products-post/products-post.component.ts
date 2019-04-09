import { Component, Input } from '@angular/core';
import { Food } from '../../../../models/food.model';
import {  NgxPopoverFormComponent } from '../../popovers/popover-examples.component';
import { NgxPopoverTabsComponent } from '../../popovers/tabs/tabs.component';



@Component({
  selector: 'ngx-products-post',
  templateUrl: 'products-post.component.html',
  styleUrls: ['./products-post.component.scss']

})
export class ProductsPostComponent {
  tabsComponent = NgxPopoverTabsComponent;
  formComponent = NgxPopoverFormComponent;
  @Input() post: Food;
}
