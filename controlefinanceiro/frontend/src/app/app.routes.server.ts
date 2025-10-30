// src/app/app.routes.server.ts
import { ServerRoute, RenderMode } from '@angular/ssr';
import { inject } from '@angular/core';
import { ProductService } from './components/products/product.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/update/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // Injeta o serviço para buscar os IDs
      const productService = inject(ProductService);
      
      // Assume que `readAll()` ou uma função similar retorna uma lista de produtos
      // ou um método que retorna apenas os IDs.
      const product = await productService.read();
      
      // Mapeia os produtos para retornar um array de objetos com o parâmetro 'id'
      return product.map(product => ({ id: product.id.toString() }));
    },
  },
  // Rotas curinga para outras rotas não pré-renderizadas
  { path: '**', renderMode: RenderMode.Prerender },
];
