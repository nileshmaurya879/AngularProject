import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineNumberFormateDetailsComponent } from './line-number-formate-details.component';

describe('LineNumberFormateDetailsComponent', () => {
  let component: LineNumberFormateDetailsComponent;
  let fixture: ComponentFixture<LineNumberFormateDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineNumberFormateDetailsComponent]
    });
    fixture = TestBed.createComponent(LineNumberFormateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
