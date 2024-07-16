import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchServiceComponent } from './research-service.component';

describe('ResearchServiceComponent', () => {
  let component: ResearchServiceComponent;
  let fixture: ComponentFixture<ResearchServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
