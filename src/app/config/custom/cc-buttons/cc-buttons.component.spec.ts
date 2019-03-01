import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcButtonsComponent } from './cc-buttons.component';

describe('CcButtonsComponent', () => {
  let component: CcButtonsComponent;
  let fixture: ComponentFixture<CcButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
