import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatSidenavModule,
    HeaderComponent,
    MatButtonModule,
  ],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  showFiller = false;
}
