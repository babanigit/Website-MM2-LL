import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfPriceMsgComponent } from './pf-price-msg.component';

describe('PfPriceMsgComponent', () => {
  let component: PfPriceMsgComponent;
  let fixture: ComponentFixture<PfPriceMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PfPriceMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PfPriceMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
