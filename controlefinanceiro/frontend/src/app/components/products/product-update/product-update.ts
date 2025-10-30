import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { MatCard } from "@angular/material/card";
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-update',
  imports: [MatCard,FormsModule,MatFormFieldModule,MatInputModule,MatCardModule],
  templateUrl: './product-update.html',
  styleUrl: './product-update.css'
})
export class ProductUpdate implements OnInit {
  
 product: Product = { id: 0, name: '', price: 0, category: '' };
  

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.productService.readById(Number(id)).subscribe(product => {
        this.product = product;
      });
    } else {
      this.productService.showError('ID do produto não encontrado.');
      this.router.navigate(['/products']);
    }
  }


  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.productService.showSuccess('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
