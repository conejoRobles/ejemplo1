import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { StarComponent } from './product/product-list/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
