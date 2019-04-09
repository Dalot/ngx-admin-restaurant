import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { NewsService } from './infinite-list/news.service';
import { NewsPostComponent } from './infinite-list/news-post/news-post.component';
import { NewsPostPlaceholderComponent } from './infinite-list/news-post-placeholder/news-post-placeholder.component';
import { NgxPopoverFormComponent } from './popovers/popover-examples.component';
import { NbPopoverModule } from '@nebular/theme/components/popover/popover.module';
import { NgxPopoverTabsComponent } from './popovers/tabs/tabs.component';


const ENTRY_COMPONENTS = [
  NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    HttpClientModule,
    NbPopoverModule
  ],
  declarations: [
    ECommerceComponent,
    CardComponent,
    InfiniteListComponent,
    NewsPostComponent,
    NewsPostPlaceholderComponent,
    NgxPopoverFormComponent,
    NgxPopoverTabsComponent,
  ],
  providers: [
    NewsService,

  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class ECommerceModule { }
