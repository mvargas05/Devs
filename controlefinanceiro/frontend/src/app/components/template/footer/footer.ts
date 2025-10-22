import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { RedDirective } from '../../../directives/red';

@Component({
  selector: 'app-footer',
  imports: [MatToolbar, RedDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}
