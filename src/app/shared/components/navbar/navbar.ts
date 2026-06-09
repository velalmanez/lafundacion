import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavbarItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent {
  navbarItems: NavbarItem[] = [
    { label: 'Inicio', route: '/home' },
    { label: 'Conócenos', route: '/about' },
    { label: 'Contacto', route: '/contact' }
  ];

  laboratorioItems: NavbarItem[] = [
    { label: 'CDMX', route: '/lab-cdmx' }
  ];

  trackByLabel(index: number, item: NavbarItem) {
    return item.label;
  }
}
