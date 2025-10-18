## Visão rápida

Repositório "controlefinanceiro" com duas partes principais:
- `frontend/` — Aplicação Angular (Angular 9) gerada pelo Angular CLI. Código cliente, rotas em `src/app`, componentes em `src/app/components` e views em `src/app/views`.
- `backend/` — API falsa baseada em `json-server` que serve `db.json` na porta 3001.

## Objetivo do agente
Ajude a implementar features e correções no frontend Angular, mantendo compatibilidade com a API mock em `http://localhost:3001/` (endpoint primário: `/products`). Priorize pequenas alterações locais, testes manuais com `ng serve` e integração com `json-server` durante desenvolvimento.

## Comandos úteis
- Iniciar frontend: `npm --prefix frontend run start` (usa `ng serve` — app em http://localhost:4200)
- Build frontend: `npm --prefix frontend run build`
- Iniciar backend mock: `npm --prefix backend run start` (inicia `json-server` em http://localhost:3001)

Se for necessário rodar ambos ao mesmo tempo durante desenvolvimento, execute os comandos em terminais separados.

## Arquitetura e pontos-chave
- Rotas principais: `frontend/src/app/app.routes.ts` ('' -> Home, 'produtos' -> ProductCrud).
- Módulo principal: `frontend/src/app/app.module.ts` — registra componentes, diretivas e módulos do Angular Material.
- Serviço de dados: `frontend/src/app/components/product/product.service.ts` — usa `HttpClient` apontando para `baseUrl = 'http://localhost:3001/products'`. Use este serviço para operações CRUD de produto.
- Modelo de dados: `frontend/src/app/components/product/product.model.ts` (interface `Product { id?: number; name: string; price: number }`).

## Convenções do projeto
- Angular CLI v9 gerou o projeto; a configuração de schematics desativa geração de testes por padrão (`skipTests: true`) — a maioria dos componentes não tem specs.
- Localização configurada para `pt-BR` em `app.module.ts`.
- Estilo: Angular Material (tema `indigo-pink`) é usado via `angular.json`.

## Exemplos práticos para o agente
- Para adicionar um novo campo `description` a produtos:
  1. Atualize `product.model.ts` adicionando `description?: string`.
  2. Atualize formulários de criação/edição (`product-create.component.ts`, `product-update.component.ts`) e templates correspondentes.
  3. O `json-server` aceitará novos campos automaticamente — atualize `db.json` se desejar dados iniciais.

- Para depurar chamadas HTTP: confira `product.service.ts` para montar URLs; testes locais esperam `json-server` ativo na porta 3001.

## Restrições e expectativas
- Não altere a porta do backend sem actualizar `product.service.ts`.
- Prefira mudanças menores e facilmente testáveis via `ng serve` + `json-server`.
- Não introduza versões maiores do Angular sem conversação prévia — o projeto é Angular 9 e depende de libs compatíveis.

## Arquivos de referência (principais)
- `frontend/package.json` — scripts e dependências.
- `backend/package.json` e `backend/db.json` — servidor mock e dados.
- `frontend/src/app/components/product/product.service.ts` — CRUD e endpoint base.
- `frontend/src/app/app.routes.ts` — rotas públicas.
- `frontend/angular.json` — build/serve config.

Se algo estiver faltando ou você precisar de convenções adicionais (por exemplo lint, commit message ou branch naming), pergunte antes de implementar mudanças grandes.
