import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-cars-sidenav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, MatDividerModule],
  templateUrl: './cars-sidenav.component.html',
  styleUrls: ['./cars-sidenav.component.scss'],
})
export class CarsSidenavComponent {}
