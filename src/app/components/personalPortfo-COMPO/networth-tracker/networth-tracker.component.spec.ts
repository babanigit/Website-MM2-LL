import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworthTrackerComponent } from './networth-tracker.component';

describe('NetworthTrackerComponent', () => {
  let component: NetworthTrackerComponent;
  let fixture: ComponentFixture<NetworthTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetworthTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworthTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
