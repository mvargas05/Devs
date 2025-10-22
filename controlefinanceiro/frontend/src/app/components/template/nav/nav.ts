import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { Home } from "../../../views/home/home";
import { ProductCrud } from "../../../views/product-crud/product-crud";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [MatSidenav, MatSidenavContainer, MatListModule, MatSidenavContent, Home, ProductCrud, RouterOutlet],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

}
