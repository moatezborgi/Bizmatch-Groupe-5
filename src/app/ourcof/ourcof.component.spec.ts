import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcofComponent } from './ourcof.component';

describe('OurcofComponent', () => {
  let component: OurcofComponent;
  let fixture: ComponentFixture<OurcofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurcofComponent]
    });
    fixture = TestBed.createComponent(OurcofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
