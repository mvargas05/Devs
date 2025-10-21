import { Component, signal, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/template/header/header';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, MatToolbarModule, NgModule],
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('frontend');
}
