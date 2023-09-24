import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionItemComponent } from './hero-section-item.component';

describe('HeroSectionItemComponent', () => {
  let component: HeroSectionItemComponent;
  let fixture: ComponentFixture<HeroSectionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSectionItemComponent]
    });
    fixture = TestBed.createComponent(HeroSectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
