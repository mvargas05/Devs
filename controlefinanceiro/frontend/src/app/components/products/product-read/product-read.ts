import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { ProductReadDataSource } from './product-read-datasouce';
import { RouterLink } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-product-read',
  imports: [CurrencyPipe, MatTableModule, MatPaginatorModule, MatSortModule, RouterLink],
  templateUrl: './product-read.html',
  styleUrl: './product-read.css'
})

export class ProductRead implements AfterViewInit, OnInit {

  products: Product[] = [];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource = new MatTableDataSource<Product>();

  displayedColumns = ['id', 'name', 'price', 'category', 'action'];

   constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.dataSource.data = products;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}