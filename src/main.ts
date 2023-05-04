import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>

    <p>Nombre del cliente:{{ nombre | uppercase}}</p>
    <p>El saldo es:{{ saldo | currency:'$'}}</p>
    <p>{{ 'Hola' | uppercase }}</p>
    <p>Nombre del cliente:{{ nombre }}</p>
    <p>Nombre del cliente en mayúsculas:{{ nombre | uppercase }}</p>
    <p>Nombre del cliente en minúsculas:{{ nombre | lowercase }}</p>
    <p>El saldo es:{{ saldo | currency:'$'}}</p>
    <p>Días laborables: {{ dias | slice:1:6}}</p>
    <p>{{ articulos | json }}</p>
    <p>Fecha actual:{{ fechaActual | date:'d/M/y' }}</p>
  `,
})
export class App {
  name = 'Angular';
  nombre = 'Juan Carlos';
  saldo = 34567;


  dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  articulos = [{
      codigo: 1,
      descripcion: "papas",
      precio: 12.33
    },{
      codigo: 2,
      descripcion: "manzanas",
      precio: 54
    }];
  fechaActual = new Date();

}

bootstrapApplication(App);
