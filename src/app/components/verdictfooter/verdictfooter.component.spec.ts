import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdictfooterComponent } from './verdictfooter.component';

describe('VerdictfooterComponent', () => {
  let component: VerdictfooterComponent;
  let fixture: ComponentFixture<VerdictfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerdictfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerdictfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
