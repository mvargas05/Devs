import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-product-read',
  imports: [NgForOf],
  templateUrl: './product-read.html',
  styleUrl: './product-read.css'
})
export class ProductRead implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

}
