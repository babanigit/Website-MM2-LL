import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoSliderComponent } from './ipo-slider.component';

describe('IpoSliderComponent', () => {
  let component: IpoSliderComponent;
  let fixture: ComponentFixture<IpoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpoSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
