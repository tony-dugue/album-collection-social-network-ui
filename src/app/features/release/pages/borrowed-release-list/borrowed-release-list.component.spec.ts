import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedReleaseListComponent } from './borrowed-release-list.component';

describe('BorrowedReleaseListComponent', () => {
  let component: BorrowedReleaseListComponent;
  let fixture: ComponentFixture<BorrowedReleaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorrowedReleaseListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowedReleaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
