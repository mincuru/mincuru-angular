import { Routes } from '@angular/router';
import { CarsComponent } from './pages/cars/cars.component';

export const routes: Routes = [
  {
    path: '',
    component: CarsComponent,
    title: 'Car list',
  },
  {
    path: 'cars',
    component: CarsComponent,
    title: 'Car list',
  },
];
