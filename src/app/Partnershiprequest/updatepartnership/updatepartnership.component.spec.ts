import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepartnershipComponent } from './updatepartnership.component';

describe('UpdatepartnershipComponent', () => {
  let component: UpdatepartnershipComponent;
  let fixture: ComponentFixture<UpdatepartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepartnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
