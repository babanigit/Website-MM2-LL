import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchResultComponent } from './switch-result.component';

describe('SwitchResultComponent', () => {
  let component: SwitchResultComponent;
  let fixture: ComponentFixture<SwitchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
