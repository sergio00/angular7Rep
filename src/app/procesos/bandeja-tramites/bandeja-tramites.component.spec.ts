import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaTramitesComponent } from './bandeja-tramites.component';

describe('BandejaTramitesComponent', () => {
  let component: BandejaTramitesComponent;
  let fixture: ComponentFixture<BandejaTramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandejaTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
