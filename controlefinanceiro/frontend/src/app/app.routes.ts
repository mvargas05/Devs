import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home';
import { ProductCrudComponent } from './views/product-crud/product-crud';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductCrudComponent },
];
