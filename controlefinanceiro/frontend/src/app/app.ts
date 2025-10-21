import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { HeaderComponent } from './components/header/header.component';
import {MatToolBarModule} from '@angular/material';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, /*HeaderComponent*/, MatToolBarModule],
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('frontend');
}
