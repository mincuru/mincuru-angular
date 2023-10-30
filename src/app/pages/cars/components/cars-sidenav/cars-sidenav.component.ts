import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatListOption } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { CarsSidenav } from '../../cars-sidenav';
import { CarsFilter } from '../../cars-filter';

@Component({
  selector: 'app-cars-sidenav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, MatDividerModule],
  templateUrl: './cars-sidenav.component.html',
  styleUrls: ['./cars-sidenav.component.scss'],
})
export class CarsSidenavComponent {
  @Input() carsSidenav!: CarsSidenav;
  carsFilter: CarsFilter = {
    makers: [],
    bodyTypes: [],
    powerTrains: [],
    driveSystems: [],
  };
  @Output() carsFilterChange = new EventEmitter<CarsFilter>();

  makerChange(selected: MatListOption[]) {
    this.carsFilter.makers = selected.map((option) => option.value);
    this.carsFilterChange.emit(this.carsFilter);
  }
  bodyTypeChange(selected: MatListOption[]) {
    this.carsFilter.bodyTypes = selected.map((option) => option.value);
    this.carsFilterChange.emit(this.carsFilter);
  }
  powerTrainChange(selected: MatListOption[]) {
    this.carsFilter.powerTrains = selected.map((option) => option.value);
    this.carsFilterChange.emit(this.carsFilter);
  }
  driveSystemChange(selected: MatListOption[]) {
    this.carsFilter.driveSystems = selected.map((option) => option.value);
    this.carsFilterChange.emit(this.carsFilter);
  }
}
