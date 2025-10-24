import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRead } from "../../componentes/products/product-read/product-read";
import { CdkOverlayOrigin } from "@angular/cdk/overlay";

@Component({
  selector: 'app-product-crud',
  imports: [ProductRead, CdkOverlayOrigin],
  templateUrl: './product-crud.html',
  styleUrl: './product-crud.css'
})


export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}


  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

}