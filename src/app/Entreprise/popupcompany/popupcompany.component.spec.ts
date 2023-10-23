import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcompanyComponent } from './popupcompany.component';

describe('PopupcompanyComponent', () => {
  let component: PopupcompanyComponent;
  let fixture: ComponentFixture<PopupcompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupcompanyComponent]
    });
    fixture = TestBed.createComponent(PopupcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
