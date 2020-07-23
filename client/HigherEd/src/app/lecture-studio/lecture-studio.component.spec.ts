import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureStudioComponent } from './lecture-studio.component';

describe('LectureStudioComponent', () => {
  let component: LectureStudioComponent;
  let fixture: ComponentFixture<LectureStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureStudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
