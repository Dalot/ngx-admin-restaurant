import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { NewsService } from './infinite-list/news.service';
import { NewsPostComponent } from './infinite-list/news-post/news-post.component';
import { NewsPostPlaceholderComponent } from './infinite-list/news-post-placeholder/news-post-placeholder.component';




@NgModule({
  imports: [
    ThemeModule,
    HttpClientModule
  ],
  declarations: [
    ECommerceComponent,
    CardComponent,
    InfiniteListComponent,
    NewsPostComponent,
    NewsPostPlaceholderComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class ECommerceModule { }
