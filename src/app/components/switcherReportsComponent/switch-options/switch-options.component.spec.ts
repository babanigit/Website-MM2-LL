import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchOptionsComponent } from './switch-options.component';

describe('SwitchOptionsComponent', () => {
  let component: SwitchOptionsComponent;
  let fixture: ComponentFixture<SwitchOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
