import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTeamListComponent } from './app-team-list.component';

describe('AppTeamListComponent', () => {
  let component: AppTeamListComponent;
  let fixture: ComponentFixture<AppTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
