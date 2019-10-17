import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEditTeamComponent } from './app-edit-team.component';

describe('AppEditTeamComponent', () => {
  let component: AppEditTeamComponent;
  let fixture: ComponentFixture<AppEditTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEditTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEditTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
