import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsinhvienComponent } from './editsinhvien.component';

describe('EditsinhvienComponent', () => {
  let component: EditsinhvienComponent;
  let fixture: ComponentFixture<EditsinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
