import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoFooterComponent } from './ipo-footer.component';

describe('IpoFooterComponent', () => {
  let component: IpoFooterComponent;
  let fixture: ComponentFixture<IpoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpoFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
