import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassArchivesComponent } from './class-archives.component';

describe('ClassArchivesComponent', () => {
  let component: ClassArchivesComponent;
  let fixture: ComponentFixture<ClassArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassArchivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
