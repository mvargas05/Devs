import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  imports: [],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate implements OnInit {
  [x: string]: any;

  constructor( private ProductService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.ProductService.showSuccess('Product created successfully!');
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
