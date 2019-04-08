import { Component, Input } from '@angular/core';
import { Food } from '../../../../models/food.model';



@Component({
  selector: 'ngx-news-post',
  templateUrl: 'news-post.component.html',
})
export class NewsPostComponent {

  @Input() post: Food;
}
