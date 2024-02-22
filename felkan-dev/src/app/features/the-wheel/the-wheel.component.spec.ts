import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWheelComponent } from './the-wheel.component';

describe('TheWheelComponent', () => {
  let component: TheWheelComponent;
  let fixture: ComponentFixture<TheWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheWheelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
