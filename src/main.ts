import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'admin',
    loadComponent: () => import('./admin').then((mod) => mod.Admin),
  },
  {
    path: 'store',
    loadComponent: () => import('./store').then((mod) => mod.Store),
  },
  // ...
];

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Hello from {{name}}!</h1>

    <div>
      <a routerLink="/admin">Admin link</a>
    </div>
    <div>
      <a routerLink="/store">Store</a>
    </div>

    <!-- The routed views render in the <router-outlet>-->
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(RouterModule.forRoot(ROUTES))],
});
