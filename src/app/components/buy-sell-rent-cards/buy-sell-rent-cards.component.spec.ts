import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellRentCardsComponent } from './buy-sell-rent-cards.component';

describe('BuySellRentCardsComponent', () => {
  let component: BuySellRentCardsComponent;
  let fixture: ComponentFixture<BuySellRentCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuySellRentCardsComponent]
    });
    fixture = TestBed.createComponent(BuySellRentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
