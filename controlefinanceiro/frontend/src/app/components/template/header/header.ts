import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [MatToolbar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
