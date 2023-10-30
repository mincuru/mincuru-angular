import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CarsSidenavComponent } from './components/cars-sidenav/cars-sidenav.component';
import { CarsSidenav } from './cars-sidenav';
import { CarsFilter } from './cars-filter';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CommonModule,
    CarsSidenavComponent,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
  ],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  carsSidenav: CarsSidenav = {
    makers: [
      { title: 'マツダ', value: 'マツダ' },
      { title: 'トヨタ', value: 'トヨタ' },
      { title: 'ホンダ', value: 'ホンダ' },
      { title: '日産', value: '日産' },
    ],
    bodyTypes: [
      { title: 'SUV', value: 'SUV' },
      { title: 'Sedan', value: 'SEDAN' },
      { title: 'ハッチバック', value: 'HATCHBACK' },
    ],
    powerTrains: [
      { title: 'エンジン', value: 'long-range' },
      { title: 'ストロングHV', value: 'performance' },
      { title: 'マイルドHV', value: 'performance' },
      { title: 'バッテリーEV', value: 'performance' },
      { title: 'シリーズHV', value: 'performance' },
    ],
    driveSystems: [
      { title: 'FF', value: 'FF' },
      { title: 'FR', value: 'FR' },
      { title: 'RR', value: 'RR' },
    ],
  };
  carsFilter: CarsFilter = {
    makers: [],
    bodyTypes: [],
    powerTrains: [],
    driveSystems: [],
  };
  filterChange(filter: CarsFilter) {
    this.carsFilter = filter;
    console.log('$$$');
    console.log(this.carsFilter);
  }
}
