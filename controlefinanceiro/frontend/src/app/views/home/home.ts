import { Component } from '@angular/core';
import { MatCard, MatCardTitle, MatCardSubtitle } from "@angular/material/card";

@Component({
  selector: 'app-home',
  imports: [MatCard, MatCardTitle, MatCardSubtitle],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
