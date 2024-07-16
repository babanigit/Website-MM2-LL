import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verdict2Component } from './verdict2.component';

describe('Verdict2Component', () => {
  let component: Verdict2Component;
  let fixture: ComponentFixture<Verdict2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verdict2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Verdict2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
