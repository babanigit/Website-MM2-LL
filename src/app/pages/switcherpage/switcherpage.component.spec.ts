import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcherpageComponent } from './switcherpage.component';

describe('SwitcherpageComponent', () => {
  let component: SwitcherpageComponent;
  let fixture: ComponentFixture<SwitcherpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitcherpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitcherpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
