import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verdict3Component } from './verdict3.component';

describe('Verdict3Component', () => {
  let component: Verdict3Component;
  let fixture: ComponentFixture<Verdict3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verdict3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Verdict3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
