import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verdict1Component } from './verdict1.component';

describe('Verdict1Component', () => {
  let component: Verdict1Component;
  let fixture: ComponentFixture<Verdict1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verdict1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Verdict1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
