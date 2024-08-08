import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoSliderDemoComponent } from './ipo-slider-demo.component';

describe('IpoSliderDemoComponent', () => {
  let component: IpoSliderDemoComponent;
  let fixture: ComponentFixture<IpoSliderDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpoSliderDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpoSliderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
