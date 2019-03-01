import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqDetalleComponent } from './busq-detalle.component';

describe('BusqDetalleComponent', () => {
  let component: BusqDetalleComponent;
  let fixture: ComponentFixture<BusqDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusqDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
