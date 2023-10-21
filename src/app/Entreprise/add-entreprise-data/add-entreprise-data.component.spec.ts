import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntrepriseDataComponent } from './add-entreprise-data.component';

describe('AddEntrepriseDataComponent', () => {
  let component: AddEntrepriseDataComponent;
  let fixture: ComponentFixture<AddEntrepriseDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEntrepriseDataComponent]
    });
    fixture = TestBed.createComponent(AddEntrepriseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
