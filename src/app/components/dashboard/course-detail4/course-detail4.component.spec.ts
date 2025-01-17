import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetail4Component } from './course-detail4.component';

describe('CourseDetail4Component', () => {
  let component: CourseDetail4Component;
  let fixture: ComponentFixture<CourseDetail4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetail4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
