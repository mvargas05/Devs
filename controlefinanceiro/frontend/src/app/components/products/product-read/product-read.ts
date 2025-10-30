import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-read',
  standalone: true, // Adicionei standalone para modernizar
  imports: [CurrencyPipe, MatTableModule, MatPaginatorModule, MatSortModule, RouterLink],
  templateUrl: './product-read.html',
  styleUrl: './product-read.css'
})
export class ProductRead implements AfterViewInit, OnInit {

  products: Product[] = [];
  dataSource = new MatTableDataSource<Product>(this.products);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  displayedColumns = ['id', 'name', 'price', 'category', 'action'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
   this.productService.read().subscribe(products => {
     this.products = products;
     // Atribui os dados ao dataSource
     this.dataSource.data = products;
    });
  }

  ngAfterViewInit(): void {
    // Atribui a paginação e a ordenação no momento correto
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
