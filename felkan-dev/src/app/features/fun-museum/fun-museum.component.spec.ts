import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunMuseumComponent } from './fun-museum.component';

describe('FunMuseumComponent', () => {
  let component: FunMuseumComponent;
  let fixture: ComponentFixture<FunMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunMuseumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
