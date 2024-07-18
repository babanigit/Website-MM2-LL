import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verdict3newComponent } from './verdict3new.component';

describe('Verdict3newComponent', () => {
  let component: Verdict3newComponent;
  let fixture: ComponentFixture<Verdict3newComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Verdict3newComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Verdict3newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
