import { Component, OnInit } from '@angular/core';
import { categories} from '../categories';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit{
  products: any;
  categories: any;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(){
    //this.getProducts();
    this.getCategories();
  }
  getCategories() {
    return categories;
  }

}