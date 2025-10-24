import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRead } from "../../components/products/product-read/product-read";



@Component({
  selector: 'app-product-crud',
  imports: [ProductRead],
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