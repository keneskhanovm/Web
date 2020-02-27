import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoryComponent } from './category/category.component';
const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full'},
  { path: 'categories', component: ProductListComponent },
  { path: 'product/:id', component: ProductItemComponent},
  { path: 'category/:id', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
