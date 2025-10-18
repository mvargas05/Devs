import { Component } from '@angular/core';
import { MatSidenavContainer, MatSidenav } from "@angular/material/sidenav";
import { MatNavList, MatListItem } from "../../../../../node_modules/@angular/material/list/index";

@Component({
  selector: 'app-nav',
  imports: [MatSidenavContainer, MatSidenav, MatNavList, MatListItem],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav 
{
  constructor() { }
   ngOnInit(): void {
      // Lógica de inicialização do componente
   }
}
