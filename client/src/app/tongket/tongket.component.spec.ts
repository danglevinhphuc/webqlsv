import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongketComponent } from './tongket.component';

describe('TongketComponent', () => {
  let component: TongketComponent;
  let fixture: ComponentFixture<TongketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
