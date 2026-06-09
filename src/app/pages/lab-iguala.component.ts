import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab-iguala',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="container-fluid text-center mt-3">
  <div class="row align-items-center">
    <div class="col">
      <h1>LABORATORIO EN IGUALA, GUERRERO</h1>
    </div>
  </div>
  <div class="row align-items-center mt-5">
    <div class="col-12 mb-3">
      <h3>Ubicación</h3>
    </div>
    <div class="col">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.722031926007!2d-99.53660717511983!3d18.333862470699152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cc387ce54eb1b7%3A0xfa76f92ee1bdec43!2sRuffo%20Figueroa%2087%2C%2024%20de%20Febrero%2C%2040080%20Iguala%20de%20la%20Independencia%2C%20Gro.!5e0!3m2!1ses!2smx!4v1737130908766!5m2!1ses!2smx"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="col mt-3">
      <p>Ruffo Figueroa 87, 24 de Febrero, 40080 Iguala de la Independencia, Gro.</p>
    </div>
  </div>
</section>
  `
})
export class LabIgualaComponent {}
