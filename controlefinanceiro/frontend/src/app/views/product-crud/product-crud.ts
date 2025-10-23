import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  imports: [],
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