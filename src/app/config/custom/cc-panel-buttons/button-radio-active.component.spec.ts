import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRadioActiveComponent } from './button-radio-active.component';

describe('ButtonRadioActiveComponent', () => {
  let component: ButtonRadioActiveComponent;
  let fixture: ComponentFixture<ButtonRadioActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRadioActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRadioActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
