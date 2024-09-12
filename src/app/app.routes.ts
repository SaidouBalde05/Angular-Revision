import { Routes } from '@angular/router';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing-page/landing-page.module').then((m) => m.LandingPageModule),
  },
  { path: 'create', component:NewFaceSnapComponent },
  {
    path: 'faceSnaps',
    loadChildren: () =>
      import('./face-snaps/face-snaps.module').then((m) => m.FaceSnapsModule),
  },
  { path: '**', redirectTo: '' }, 
];