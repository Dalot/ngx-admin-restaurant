import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ProductsPostsService } from './infinite-list/products-posts.service';
import { ProductsPostComponent } from './infinite-list/products-post/products-post.component';
import { ProductsPostPlaceholderComponent } from './infinite-list/products-post-placeholder/products-post-placeholder.component';
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
    ProductsPostComponent,
    ProductsPostPlaceholderComponent,
    NgxPopoverFormComponent,
    NgxPopoverTabsComponent,
  ],
  providers: [
    ProductsPostsService,

  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class ECommerceModule { }
