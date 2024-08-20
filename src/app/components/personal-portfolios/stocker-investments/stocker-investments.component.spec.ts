import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockerInvestmentsComponent } from './stocker-investments.component';

describe('StockerInvestmentsComponent', () => {
  let component: StockerInvestmentsComponent;
  let fixture: ComponentFixture<StockerInvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockerInvestmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockerInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
