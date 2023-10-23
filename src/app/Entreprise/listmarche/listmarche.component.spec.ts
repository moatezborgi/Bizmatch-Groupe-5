import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmarcheComponent } from './listmarche.component';

describe('ListmarcheComponent', () => {
  let component: ListmarcheComponent;
  let fixture: ComponentFixture<ListmarcheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListmarcheComponent]
    });
    fixture = TestBed.createComponent(ListmarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
