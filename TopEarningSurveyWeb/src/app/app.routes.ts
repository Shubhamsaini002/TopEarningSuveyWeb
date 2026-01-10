import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component')
        .then(m => m.HomeComponent),
  },
  {
    path: 'offers',
    loadComponent: () =>
      import('./components/offers/offers.component')
        .then(m => m.OffersComponent),
  },
  {
    path: 'redeem',
    loadComponent: () =>
      import('./components/redeem/redeem.component')
        .then(m => m.RedeemComponent),
  },
  {
    path: 'help',
    loadComponent: () =>
      import('./components/helpcenter/helpcenter.component')
        .then(m => m.HelpcenterComponent),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./components/privacy/privacy.component')
        .then(m => m.PrivacyComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
