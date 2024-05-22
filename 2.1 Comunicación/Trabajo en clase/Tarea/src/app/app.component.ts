import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `Hello {{ city }}, {{ 1 + 1 }}`,
  styles: `
  :host {
    color: #a144eb;
  }
`,
})
export class AppComponent {
  city = 'San Francisco';
}