import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodySectionBodyItemComponent } from './home-body-section-body-item.component';

describe('HomeBodySectionBodyItemComponent', () => {
  let component: HomeBodySectionBodyItemComponent;
  let fixture: ComponentFixture<HomeBodySectionBodyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBodySectionBodyItemComponent]
    });
    fixture = TestBed.createComponent(HomeBodySectionBodyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
