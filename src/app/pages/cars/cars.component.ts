import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CarsSidenavComponent } from './components/cars-sidenav/cars-sidenav.component';

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
export class CarsComponent {}
