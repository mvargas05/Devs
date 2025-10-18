import { Component } from '@angular/core';
import { MatSidenavContainer, MatSidenav } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: 'app-nav',
  imports: [MatSidenavContainer, MatSidenav, MatListModule],
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
