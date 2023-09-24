import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodySectionBodyComponent } from './home-body-section-body.component';

describe('HomeBodySectionBodyComponent', () => {
  let component: HomeBodySectionBodyComponent;
  let fixture: ComponentFixture<HomeBodySectionBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBodySectionBodyComponent]
    });
    fixture = TestBed.createComponent(HomeBodySectionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
