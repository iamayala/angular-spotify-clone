import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodySectionHeaderComponent } from './home-body-section-header.component';

describe('HomeBodySectionHeaderComponent', () => {
  let component: HomeBodySectionHeaderComponent;
  let fixture: ComponentFixture<HomeBodySectionHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBodySectionHeaderComponent]
    });
    fixture = TestBed.createComponent(HomeBodySectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
