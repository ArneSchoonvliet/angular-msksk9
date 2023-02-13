import 'zone.js/dist/zone';
import { Component } from '@angular/core';
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
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  template: `
    <h1>Hello from {{name}}!</h1>

    <a routerLink="/admin">Admin link</a>

    <!-- The routed views render in the <router-outlet>-->
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
