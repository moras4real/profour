import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopmapComponent } from './popmap.component';

describe('PopmapComponent', () => {
  let component: PopmapComponent;
  let fixture: ComponentFixture<PopmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopmapComponent]
    });
    fixture = TestBed.createComponent(PopmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
