import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsCompanyComponent } from './maps-company.component';

describe('MapsCompanyComponent', () => {
  let component: MapsCompanyComponent;
  let fixture: ComponentFixture<MapsCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsCompanyComponent]
    });
    fixture = TestBed.createComponent(MapsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
