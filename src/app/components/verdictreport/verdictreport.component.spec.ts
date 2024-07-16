import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdictreportComponent } from './verdictreport.component';

describe('VerdictreportComponent', () => {
  let component: VerdictreportComponent;
  let fixture: ComponentFixture<VerdictreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerdictreportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerdictreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
