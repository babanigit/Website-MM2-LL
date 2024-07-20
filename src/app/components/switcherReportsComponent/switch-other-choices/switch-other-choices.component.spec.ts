import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchOtherChoicesComponent } from './switch-other-choices.component';

describe('SwitchOtherChoicesComponent', () => {
  let component: SwitchOtherChoicesComponent;
  let fixture: ComponentFixture<SwitchOtherChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchOtherChoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchOtherChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
