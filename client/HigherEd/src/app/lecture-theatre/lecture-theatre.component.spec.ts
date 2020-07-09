import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureTheatreComponent } from './lecture-theatre.component';

describe('LectureTheatreComponent', () => {
  let component: LectureTheatreComponent;
  let fixture: ComponentFixture<LectureTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
