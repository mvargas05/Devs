import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { Header } from './components/template/header/header';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Footer } from "./components/template/footer/footer";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { Nav } from "./components/template/nav/nav";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header, 
    MatToolbarModule, 
    Footer, 
    MatSidenavModule, 
    MatListModule, 
    Nav, 
    MatCardModule, 
    MatButtonModule,
    MatSnackBarModule,
    provideHttpClient
  ],
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('frontend');
}
