import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { Home } from "../../../views/home/home";

@Component({
  selector: 'app-nav',
  imports: [MatSidenav, MatSidenavContainer, MatListModule, MatSidenavContent, Home],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

}
