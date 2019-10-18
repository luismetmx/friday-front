import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPendingTasksListComponent } from './app-pending-tasks-list.component';

describe('AppPendingTasksListComponent', () => {
  let component: AppPendingTasksListComponent;
  let fixture: ComponentFixture<AppPendingTasksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPendingTasksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPendingTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
