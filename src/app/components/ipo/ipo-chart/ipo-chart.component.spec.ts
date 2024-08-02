import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoChartComponent } from './ipo-chart.component';

describe('IpoChartComponent', () => {
  let component: IpoChartComponent;
  let fixture: ComponentFixture<IpoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpoChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
