import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdictpageComponent } from './verdictpage.component';

describe('VerdictpageComponent', () => {
  let component: VerdictpageComponent;
  let fixture: ComponentFixture<VerdictpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerdictpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerdictpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
