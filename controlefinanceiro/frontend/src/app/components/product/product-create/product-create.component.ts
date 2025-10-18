import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe({
      next: () => {
        this.productService.showMessage('Produto criado!');
        this.router.navigate(['/produtos']);
      },
      error: (err) => {
        this.productService.showMessage('Erro ao criar produto', true);
        console.error('createProduct error', err);
      }
    });

  }

  cancel(): void {
    this.router.navigate(['/produtos'])
  }
}
