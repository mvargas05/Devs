import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/template/header/header';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Footer } from "./components/template/footer/footer";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { Nav } from "./components/template/nav/nav";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, MatToolbarModule, Footer, MatSidenavModule, MatListModule, Nav],
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('frontend');
}
