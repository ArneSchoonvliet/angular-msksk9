import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-store',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>store</h1>
  `,
})
export class Store {}
