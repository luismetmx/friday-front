import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSolutionListComponent } from './app-solution-list.component';

describe('AppSolutionListComponent', () => {
  let component: AppSolutionListComponent;
  let fixture: ComponentFixture<AppSolutionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSolutionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSolutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
