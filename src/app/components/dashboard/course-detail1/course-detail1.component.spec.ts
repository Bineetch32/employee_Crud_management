import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetail1Component } from './course-detail1.component';

describe('CourseDetail1Component', () => {
  let component: CourseDetail1Component;
  let fixture: ComponentFixture<CourseDetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetail1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
