import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineNumberFormateComponent } from './line-number-formate.component';

describe('LineNumberFormateComponent', () => {
  let component: LineNumberFormateComponent;
  let fixture: ComponentFixture<LineNumberFormateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineNumberFormateComponent]
    });
    fixture = TestBed.createComponent(LineNumberFormateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
