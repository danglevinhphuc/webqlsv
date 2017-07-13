import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtingiaovienComponent } from './thongtingiaovien.component';

describe('ThongtingiaovienComponent', () => {
  let component: ThongtingiaovienComponent;
  let fixture: ComponentFixture<ThongtingiaovienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtingiaovienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtingiaovienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
