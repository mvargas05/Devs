import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: 'app-nav',
  imports: [MatSidenav, MatSidenavContainer, MatListModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

}
