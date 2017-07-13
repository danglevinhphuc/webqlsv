import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrashboardComponent } from './drashboard.component';

describe('DrashboardComponent', () => {
  let component: DrashboardComponent;
  let fixture: ComponentFixture<DrashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
