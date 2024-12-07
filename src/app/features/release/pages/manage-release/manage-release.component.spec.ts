import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReleaseComponent } from './manage-release.component';

describe('ManageReleaseComponent', () => {
  let component: ManageReleaseComponent;
  let fixture: ComponentFixture<ManageReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageReleaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
