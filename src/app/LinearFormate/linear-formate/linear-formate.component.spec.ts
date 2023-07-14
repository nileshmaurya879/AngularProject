import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearFormateComponent } from './linear-formate.component';

describe('LinearFormateComponent', () => {
  let component: LinearFormateComponent;
  let fixture: ComponentFixture<LinearFormateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearFormateComponent]
    });
    fixture = TestBed.createComponent(LinearFormateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
