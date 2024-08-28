import { Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { MarcaslistComponent } from './components/marcas/marcaslist/marcaslist.component';
import { CarrosformComponent } from './components/carros/carrosform/carrosform.component';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin',
    component: HomeComponent,
    children: [
      { path: 'carros', component: CarroslistComponent },
      { path: 'carros/edit/:id', component: CarrosformComponent },
      { path: 'carros/edit', component: CarrosformComponent },
      { path: 'marcas', component: MarcaslistComponent },
    ],
  },
];
