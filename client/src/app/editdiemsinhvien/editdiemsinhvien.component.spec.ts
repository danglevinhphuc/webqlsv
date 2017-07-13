import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdiemsinhvienComponent } from './editdiemsinhvien.component';

describe('EditdiemsinhvienComponent', () => {
  let component: EditdiemsinhvienComponent;
  let fixture: ComponentFixture<EditdiemsinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdiemsinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdiemsinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
