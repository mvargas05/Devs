import { Component } from '@angular/core';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { Home } from "../../../views/home/home";
import { ProductCrud } from "../../../views/product-crud/product-crud";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [MatSidenavContainer, MatSidenav, MatListModule, MatSidenavContent, RouterOutlet],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class Nav 
{
  constructor() { }
   ngOnInit(): void {
      // Lógica de inicialização do componente
   }
}
