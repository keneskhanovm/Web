import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';
import { CategoryComponent } from './category/category.component';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductItemComponent } from './product-item/product-item.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    VerticalNavComponent,
    CategoryComponent,
    TopBarComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/