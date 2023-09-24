import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenPlayBtnComponent } from './green-play-btn.component';

describe('GreenPlayBtnComponent', () => {
  let component: GreenPlayBtnComponent;
  let fixture: ComponentFixture<GreenPlayBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenPlayBtnComponent]
    });
    fixture = TestBed.createComponent(GreenPlayBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
