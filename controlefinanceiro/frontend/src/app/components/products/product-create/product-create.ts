import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  imports: [],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate implements OnInit {

  constructor( private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.showSuccess('Product Create Component Loaded Successfully!');
  }

}
