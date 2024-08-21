import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoBoxComponent } from './ipo-box.component';

describe('IpoBoxComponent', () => {
  let component: IpoBoxComponent;
  let fixture: ComponentFixture<IpoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpoBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
