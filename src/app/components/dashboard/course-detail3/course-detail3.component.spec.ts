import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetail3Component } from './course-detail3.component';

describe('CourseDetail3Component', () => {
  let component: CourseDetail3Component;
  let fixture: ComponentFixture<CourseDetail3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetail3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
