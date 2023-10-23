import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepartComponent } from './deletepart.component';

describe('DeletepartComponent', () => {
  let component: DeletepartComponent;
  let fixture: ComponentFixture<DeletepartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletepartComponent]
    });
    fixture = TestBed.createComponent(DeletepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
