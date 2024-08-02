import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPOpageComponent } from './ipopage.component';

describe('IPOpageComponent', () => {
  let component: IPOpageComponent;
  let fixture: ComponentFixture<IPOpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IPOpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPOpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
