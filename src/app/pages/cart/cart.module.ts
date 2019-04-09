import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { NbPopoverModule } from '@nebular/theme/components/popover/popover.module';
import { CartComponent } from './cart.component';


@NgModule({
  imports: [
    ThemeModule,
    HttpClientModule,
    NbPopoverModule
  ],
  declarations: [
    CartComponent
  ],
  providers: [
 
  ],

})
export class CartModule { }
