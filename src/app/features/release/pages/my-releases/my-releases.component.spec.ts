import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReleasesComponent } from './my-releases.component';

describe('MyReleasesComponent', () => {
  let component: MyReleasesComponent;
  let fixture: ComponentFixture<MyReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyReleasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
