import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcPanelCollapseComponent } from './cc-panel-collapse.component';

describe('CcPanelCollapseComponent', () => {
  let component: CcPanelCollapseComponent;
  let fixture: ComponentFixture<CcPanelCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcPanelCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcPanelCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
