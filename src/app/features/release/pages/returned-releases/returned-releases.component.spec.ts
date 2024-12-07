import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedReleasesComponent } from './returned-releases.component';

describe('ReturnedReleasesComponent', () => {
  let component: ReturnedReleasesComponent;
  let fixture: ComponentFixture<ReturnedReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnedReleasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnedReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
