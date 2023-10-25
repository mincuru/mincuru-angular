import { Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';

const routeConfig: Routes = [
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

export default routeConfig;
