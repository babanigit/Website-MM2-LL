import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoSnapshotComponent } from './ipo-snapshot.component';

describe('IpoSnapshotComponent', () => {
  let component: IpoSnapshotComponent;
  let fixture: ComponentFixture<IpoSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpoSnapshotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpoSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
