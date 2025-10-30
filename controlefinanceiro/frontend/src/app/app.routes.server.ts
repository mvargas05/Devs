// src/app/app.routes.server.ts
import { ServerRoute, RenderMode } from '@angular/ssr';
import { inject } from '@angular/core';
import { ProductService } from './components/products/product.service';
import { firstValueFrom } from 'rxjs'; // Importe firstValueFrom

export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/update/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // Injeta o serviço
      const productService = inject(ProductService);

      // Converte o Observable para uma Promise usando firstValueFrom
      const products = await firstValueFrom(productService.read());
      
      // Agora você pode mapear o array de produtos
      return products.map(product => ({ id: product.id.toString() }));
    },
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
