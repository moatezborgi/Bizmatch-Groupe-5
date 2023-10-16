import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpartnershipComponent } from './addpartnership.component';

describe('AddpartnershipComponent', () => {
  let component: AddpartnershipComponent;
  let fixture: ComponentFixture<AddpartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpartnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
