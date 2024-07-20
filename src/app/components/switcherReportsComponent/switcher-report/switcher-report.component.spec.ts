import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcherReportComponent } from './switcher-report.component';

describe('SwitcherReportComponent', () => {
  let component: SwitcherReportComponent;
  let fixture: ComponentFixture<SwitcherReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitcherReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitcherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
