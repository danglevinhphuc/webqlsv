import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemsinhvienComponent } from './themsinhvien.component';

describe('ThemsinhvienComponent', () => {
  let component: ThemsinhvienComponent;
  let fixture: ComponentFixture<ThemsinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemsinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemsinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
