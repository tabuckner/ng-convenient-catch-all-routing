import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <button [routerLink]="'home'">Home</button>
      <button [routerLink]="'lazy-module'">Lazy Module</button>
      <button [routerLink]="'support'">Support</button>
      <button [routerLink]="'settings'">Settings</button>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
