import { Component, Input } from '@angular/core';
import { Food } from '../../../../models/food.model';
import {  NgxPopoverFormComponent } from '../../popovers/popover-examples.component';
import { NgxPopoverTabsComponent } from '../../popovers/tabs/tabs.component';



@Component({
  selector: 'ngx-news-post',
  templateUrl: 'news-post.component.html',
  styleUrls: ['./news-post.component.scss']

})
export class NewsPostComponent {
  tabsComponent = NgxPopoverTabsComponent;
  formComponent = NgxPopoverFormComponent;
  @Input() post: Food;
}
