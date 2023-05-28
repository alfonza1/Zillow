import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedHomesComponent } from './featured-homes.component';

describe('FeaturedHomesComponent', () => {
  let component: FeaturedHomesComponent;
  let fixture: ComponentFixture<FeaturedHomesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedHomesComponent]
    });
    fixture = TestBed.createComponent(FeaturedHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
