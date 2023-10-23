import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofconnexionrequestsComponent } from './listofconnexionrequests.component';

describe('ListofconnexionrequestsComponent', () => {
  let component: ListofconnexionrequestsComponent;
  let fixture: ComponentFixture<ListofconnexionrequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListofconnexionrequestsComponent]
    });
    fixture = TestBed.createComponent(ListofconnexionrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
