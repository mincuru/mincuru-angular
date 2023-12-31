import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from 'src/app/models/car';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';

@Component({
  selector: 'app-cars-grid',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    FavoriteButtonComponent,
  ],
  templateUrl: './cars-grid.component.html',
  styleUrls: ['./cars-grid.component.scss'],
})
export class CarsGridComponent {
  @Input() cars!: Car[];
}
