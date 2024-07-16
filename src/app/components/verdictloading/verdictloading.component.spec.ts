import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdictloadingComponent } from './verdictloading.component';

describe('VerdictloadingComponent', () => {
  let component: VerdictloadingComponent;
  let fixture: ComponentFixture<VerdictloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerdictloadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerdictloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
