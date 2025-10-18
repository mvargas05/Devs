import { Product } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe({
      next: () => {
        this.productService.showMessage("Produto atualizado com sucesso!");
        this.router.navigate(["/produtos"]);
      },
      error: (err) => {
        this.productService.showMessage('Erro ao atualizar produto', true);
        console.error('updateProduct error', err);
      }
    });
  }

  cancel(): void {
    this.router.navigate(["/produtos"]);
  }
}
