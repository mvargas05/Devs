import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [MatSidenav, MatSidenavContainer, MatListModule, MatSidenavContent, RouterOutlet,RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

}
