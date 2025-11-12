import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Importe ActivatedRoute aqui
import { Product } from '../product.model';
import { MatCard } from "@angular/material/card";
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-product-update',
  standalone: true, // Adicionado standalone para compatibilidade com seu código anterior
  imports: [MatCard,FormsModule,MatFormFieldModule,MatInputModule,MatCardModule],
  templateUrl: './product-update.html',
  styleUrl: './product-update.css'
})
export class ProductUpdate implements OnInit {
  
  // Inicialize o produto com valores padrão ou como undefined para segurança no template
  product: Product | undefined; 

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute) { }

ngOnInit(): void {
  const idParam = this.route.snapshot.paramMap.get('id');

  if (idParam) {
    const id = Number(idParam);
    if (!isNaN(id)) {
      this.productService.readById('id').subscribe(product => {
        this.product = product;
      });
    } else {
      this.productService.showError('ID do produto inválido.');
      this.router.navigate(['/products']);
    }
  } else {
    this.productService.showError('ID não fornecido na rota.');
    this.router.navigate(['/products']);
  }
}


  updateProduct(): void {
    // Adicione uma verificação de segurança antes de chamar o update
    if (this.product && this.product.id) {
        this.productService.updateProduct(this.product).subscribe(() => {
          this.productService.showSuccess('Produto atualizado com sucesso!');
          this.router.navigate(['/products']);
        });
    } else {
        this.productService.showError('Não foi possível atualizar o produto (ID ausente).');
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
