import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatepriceComponent } from './calculateprice.component';

describe('CalculatepriceComponent', () => {
  let component: CalculatepriceComponent;
  let fixture: ComponentFixture<CalculatepriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatepriceComponent]
    });
    fixture = TestBed.createComponent(CalculatepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
