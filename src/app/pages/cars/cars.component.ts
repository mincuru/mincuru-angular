import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { CarsSidenavComponent } from './components/cars-sidenav/cars-sidenav.component';
import { CarsGridComponent } from './components/cars-grid/cars-grid.component';
import { CarsSidenav } from './cars-sidenav';
import { CarsFilter } from './cars-filter';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CommonModule,
    CarsSidenavComponent,
    CarsGridComponent,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatGridListModule,
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
  cars: Car[] = [
    {
      id: 1,
      modelName: 'CX-5',
      makerName: 'マツダ',
      url: 'https://www.mazda.co.jp/cars/cx-5/',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg',
      price: 3200000,
      body: {
        // type: 'SUV',
        length: 4747,
        width: 1850,
        height: 1690,
      },
      powerTrain: 'ICE',
      driveSystem: 'AWD',
      fuelType: 'REGULAR',
    },
    {
      id: 2,
      modelName: 'カローラツーリング',
      makerName: 'トヨタ',
      url: 'https://toyota.jp/corollatouring/',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/8/8a/Toyota_COROLLA_TOURING_HYBRID_W%C3%97B_2WD_%286AA-ZWE211W-AWXSB%29_front.jpg',
      price: 2678500,
      body: {
        // type: 'STATION_WAGON',
        length: 4495,
        width: 1745,
        height: 1460,
      },
      powerTrain: 'StrHV',
      driveSystem: 'AWD',
      fuelType: 'REGULAR',
    },
    {
      id: 3,
      modelName: 'NSX',
      makerName: 'ホンダ',
      url: 'https://www.honda.co.jp/NSX/types/',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/e/ea/2019_Honda_NSX_3.5_CAA-NC1_%2820190722%29_01.jpg',
      price: 27940000,
      body: {
        // type: 'COUPE',
        length: 4535,
        width: 1940,
        height: 1215,
      },
      powerTrain: 'MldHV',
      driveSystem: 'AWD',
      fuelType: 'PREMIUM',
    },
    {
      id: 4,
      modelName: 'Honda e',
      makerName: 'ホンダ',
      url: 'https://www.honda.co.jp/honda-e/',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/9/9e/Honda_e_Advance_%28ZAA-ZC7%29_front.jpg',
      price: 4950000,
      body: {
        // type: 'HATCHBACK',
        length: 3895,
        width: 1750,
        height: 1510,
      },
      powerTrain: 'BEV',
      driveSystem: 'RR',
      fuelType: '',
      // new FuelType("")
    },
    {
      id: 5,
      modelName: 'ノート',
      makerName: '日産',
      url: 'https://www3.nissan.co.jp/vehicles/new/note.html',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/0a/Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_front-left.jpg',
      price: 2445300,
      body: {
        // type: 'HATCHBACK',
        length: 4045,
        width: 1695,
        height: 1520,
      },
      powerTrain: 'SerHV',
      driveSystem: 'FF',
      fuelType: 'REGULAR',
    },
    {
      id: 6,
      modelName: '3シリーズツーリング',
      makerName: 'BMW',
      url: 'https://www.bmw.co.jp/ja/all-models/3-series/touring/2019/bmw-3-series-touring-inspire.html',
      imageUrl: '',
      price: 6340000,
      body: {
        // type: 'STATION_WAGON',
        length: 4715,
        width: 1825,
        height: 1475,
      },
      powerTrain: 'ICE',
      driveSystem: 'AWD',
      fuelType: 'DIESEL',
    },
  ];
  filterChange(filter: CarsFilter) {
    this.carsFilter = filter;
    console.log('$$$');
    console.log(this.carsFilter);
  }
}
