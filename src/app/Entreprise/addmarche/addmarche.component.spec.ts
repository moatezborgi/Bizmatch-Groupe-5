import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmarcheComponent } from './addmarche.component';

describe('AddmarcheComponent', () => {
  let component: AddmarcheComponent;
  let fixture: ComponentFixture<AddmarcheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmarcheComponent]
    });
    fixture = TestBed.createComponent(AddmarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
