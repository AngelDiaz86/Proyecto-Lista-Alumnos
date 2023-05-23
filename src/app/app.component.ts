import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>Sistema de Alumnos</h1>
    </div>
    <hr>
    <app-alumnos></app-alumnos>
  `,
  styles: []
})
export class AppComponent {
}
