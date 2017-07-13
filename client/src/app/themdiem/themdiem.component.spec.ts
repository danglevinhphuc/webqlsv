import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemdiemComponent } from './themdiem.component';

describe('ThemdiemComponent', () => {
  let component: ThemdiemComponent;
  let fixture: ComponentFixture<ThemdiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemdiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemdiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
