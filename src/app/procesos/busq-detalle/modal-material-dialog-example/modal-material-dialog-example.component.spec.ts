import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMaterialDialogExampleComponent } from './modal-material-dialog-example.component';

describe('ModalMaterialDialogExampleComponent', () => {
  let component: ModalMaterialDialogExampleComponent;
  let fixture: ComponentFixture<ModalMaterialDialogExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMaterialDialogExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMaterialDialogExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
