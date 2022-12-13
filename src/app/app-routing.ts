import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'delivery',
  },
  {
    path: 'delivery',
    loadComponent: () =>
      import('./delivery/delivery.component').then(
        mod => mod.DeliveryComponent
      ),
  },
];
