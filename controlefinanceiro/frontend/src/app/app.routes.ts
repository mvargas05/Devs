
import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home';
import { ProductCrudComponent } from './views/product-crud/product-crud';
import { ProductCreate } from './components/products/product-create/product-create';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductCrudComponent },
    { path: 'products/create', component: ProductCreate }
];
