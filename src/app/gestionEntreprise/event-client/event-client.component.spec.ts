import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventClientComponent } from './event-client.component';

describe('EventClientComponent', () => {
  let component: EventClientComponent;
  let fixture: ComponentFixture<EventClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventClientComponent]
    });
    fixture = TestBed.createComponent(EventClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
