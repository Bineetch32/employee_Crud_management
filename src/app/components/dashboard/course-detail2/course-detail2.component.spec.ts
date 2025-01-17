import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetail2Component } from './course-detail2.component';

describe('CourseDetail2Component', () => {
  let component: CourseDetail2Component;
  let fixture: ComponentFixture<CourseDetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetail2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
