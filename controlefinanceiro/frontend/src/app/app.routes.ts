
import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home';
import { ProductCrudComponent } from './views/product-crud/product-crud';
import { ProductCreate } from './components/products/product-create/product-create';
import { ProductUpdate } from './components/products/product-update/product-update';



export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./login/login').then(m => m.LoginComponent) },
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductCrudComponent },
    { path: 'products/create', component: ProductCreate },
    { path: 'products/update/:id', component: ProductUpdate },
];
