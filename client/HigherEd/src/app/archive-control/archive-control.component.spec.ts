import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveControlComponent } from './archive-control.component';

describe('ArchiveControlComponent', () => {
  let component: ArchiveControlComponent;
  let fixture: ComponentFixture<ArchiveControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
