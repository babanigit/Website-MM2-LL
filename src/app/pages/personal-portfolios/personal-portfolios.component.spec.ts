import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPortfoliosComponent } from './personal-portfolios.component';

describe('PersonalPortfoliosComponent', () => {
  let component: PersonalPortfoliosComponent;
  let fixture: ComponentFixture<PersonalPortfoliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalPortfoliosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalPortfoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
