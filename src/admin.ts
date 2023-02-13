import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'my-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>admin</h1>
  `,
})
export class Admin {}
