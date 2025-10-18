import { RenderMode, ServerRoute } from '@angular/platform-server';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
