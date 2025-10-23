import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { MatCard } from "@angular/material/card";
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-create',
  imports: [MatCard,FormsModule,MatFormFieldModule,MatInputModule,MatCardModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate implements OnInit {
  
  product: Product = {
    name: '',
    price: null,
    category: ''
  };

  constructor( private ProductService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.ProductService.createProduct(this.product).subscribe(() => {
      this.ProductService.showSuccess('Product created successfully!');
      this.router.navigate(['/products']);
    }
    );
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
