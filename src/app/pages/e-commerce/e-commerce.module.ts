import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    ThemeModule,
    HttpClientModule
  ],
  declarations: [
    ECommerceComponent,
    CardComponent
  ],
  providers: [

  ],
})
export class ECommerceModule { }
