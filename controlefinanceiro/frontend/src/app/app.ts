import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/template/header/header";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header],
  templateUrl: './app.html',
 
})
export class App {
  protected readonly title = signal('frontend');
}
