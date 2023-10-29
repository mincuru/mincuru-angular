import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsSidenavComponent } from './cars-sidenav.component';

describe('CarsSidenavComponent', () => {
  let component: CarsSidenavComponent;
  let fixture: ComponentFixture<CarsSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarsSidenavComponent]
    });
    fixture = TestBed.createComponent(CarsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
