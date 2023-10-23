import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllPartComponent } from './list-all-part.component';

describe('ListAllPartComponent', () => {
  let component: ListAllPartComponent;
  let fixture: ComponentFixture<ListAllPartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllPartComponent]
    });
    fixture = TestBed.createComponent(ListAllPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
