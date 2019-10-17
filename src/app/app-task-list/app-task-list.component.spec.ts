import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTaskListComponent } from './app-task-list.component';

describe('AppTaskListComponent', () => {
  let component: AppTaskListComponent;
  let fixture: ComponentFixture<AppTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
