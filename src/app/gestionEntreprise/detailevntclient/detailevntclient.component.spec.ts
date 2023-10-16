import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailevntclientComponent } from './detailevntclient.component';

describe('DetailevntclientComponent', () => {
  let component: DetailevntclientComponent;
  let fixture: ComponentFixture<DetailevntclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailevntclientComponent]
    });
    fixture = TestBed.createComponent(DetailevntclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
