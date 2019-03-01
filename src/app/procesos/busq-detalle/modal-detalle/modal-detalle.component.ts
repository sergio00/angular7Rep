import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html'
})
export class ModalDetalleComponent implements OnInit {

   cadenaEjemplo:string="Cadena de Pruebas..."
   btnOkText:string="aceptar";
   btnCancelText:string="cancelar";
   title:string='';

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  dismiss(){
    console.log("dismiss");
    this.activeModal.dismiss();
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }
}
