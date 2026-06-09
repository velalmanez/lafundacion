import { Routes } from '@angular/router';


export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)},
  {path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent)},
  {path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent)},
  {path: 'lab-cdmx', loadComponent: () => import('./pages/lab-cdmx/lab-cdmx').then(m => m.LabCdmxComponent)},
  { path: '**', redirectTo: '' }
];
