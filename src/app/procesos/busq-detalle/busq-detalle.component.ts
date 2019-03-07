import { ModalDetalleComponent } from './modal-detalle/modal-detalle.component';
import { ConfirmationDialogService } from './../../config/custom/confirmation-dialog/confirmation-dialog.service';
import { cbtn, Botones } from './../../config/custom/cc-panel-buttons/buttons.componente';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ComponentSelectors } from 'src/app/component-selectors';
import { ModalMaterialDialogExampleComponent } from './modal-material-dialog-example/modal-material-dialog-example.component';

declare const $: any;

@Component({
  selector: ComponentSelectors.BusqDetailComponent,
  templateUrl: './busq-detalle.component.html',
  styleUrls: ['./busq-detalle.component.css']

})
export class BusqDetalleComponent implements OnInit {


  public grupoMantenimiento1: cbtn[];
  control: any;


  constructor(private router: Router, public botones: Botones, private confirmationDialogService: ConfirmationDialogService) {

    this.control = BusqDetalleComponent.prototype;
    console.log(this.control);

  }

  ngOnInit() {
    this.grupoMantenimiento1 = [
      {
        orig: "aprobarRegla",
        accion: this.control.alerta1, paramAccion: "Xuuuu",
        boton: { icon: "fa fa-check", texto: "Aprobar" },
        permiso: true,
        showtxt: false,
        showimg: true,
        showbadge: false,
        clase: "btn-primary"

      },
      {
        orig: "aprobarRegla",
        accion: this.control.alerta2, paramAccion: "ddd",
        boton: { icon: "fa fa-ban", texto: "Cancelar" },
        permiso: true,
        showtxt: false,
        showimg: true,
        showbadge: false,
        clase: "btn-primary"
      },
      {
        orig: "aprobarRegla3",
        accion: this.control.alerta3, paramAccion: "DDD",
        boton: { icon: "fa fa-search", texto: "Consulta" },
        permiso: true,
        showtxt: true,
        showimg: true,
        showbadge: false,
        clase: "btn-primary"

      },
      {
        orig: "aprobarRegla4",
        accion: this.regresar , paramAccion: this.router,
        boton: { icon: "fa fa-undo", texto: "Regresar" },
        permiso: true,
        showtxt: true,
        showimg: true,
        showbadge: false,
        clase: "btn-primary"
      },
      {
        orig: "aprobarRegla4",
        accion: this.openConfirmationDialog, paramAccion: this.confirmationDialogService,
        boton: { icon: "fa fa-comment-o", texto: "Pregunta Modal Servicio" },
        permiso: true,
        showtxt: true,
        showimg: true,
        showbadge: false,
        clase: "btn-primary"
      },
      {
        orig: "aprobarRegla4",
        accion: this.openModal, paramAccion: this.confirmationDialogService,
        boton: { icon: "fa fa-rss", texto: "Modal Bootstrap" },
        permiso: true,
        showtxt: true,
        showimg: true,
        showbadge: false,
        clase: "btn-primary"
      },
      {
        orig: "aprobarRegla4",
        accion: this.openModal2, paramAccion: this.confirmationDialogService,
        boton: { icon: "fa fa-rss", texto: "Modal Material" },
        permiso: true,
        showtxt: true,
        showimg: true,
        showbadge: false,
        clase: "btn-primary"
      }

    ];


  }

  regresar(router: any) {
    //console.log(router.v1.v1);
    router.v1.navigateByUrl('/procesos');
  }

  alerta() {

    alert("Ejecuto alerta");
  }

  alerta1() {

    alert("Ejecuto alerta 1");
  }

  alerta2() {

    alert("Ejecuto alerta 2");
  }

  alerta3() {

    alert("Ejecuto alerta 3");
  }


  /* Abrir un Componente Modal */
  public openModal(modal:any) {
    const modalRef = modal.v1.open(ModalDetalleComponent);
    modalRef.componentInstance.title = 'About';
    modalRef.result.then(
      res => { console.log("Resulatdo Modal:" + res) }
    ).catch(
      resultado => {
        console.log("Cerro Manual:" + resultado);
      }
    );

  }
    /* Abrir un Componente Modal */
  public openModal2(modal:any) {
      //console.log(modal.v1);      
      modal.v1.open2(ModalMaterialDialogExampleComponent,{},'About');
  
    }

  /* Modal de Pregunta por medio de un servicio */
  public openConfirmationDialog(confirmDialog:any) {

    confirmDialog.v1.confirm('Pregunta', 'Esta seguro de eliminar el registro.?')
      .then(
        (confirmed) => console.log('Opcion Seleccionada:', confirmed)
      )
      .catch(() => console.log('Cancelo la Ventana de Pregunta'));
  }


  abrirModalJquery() {
    $("#ModaldePruebas").modal("show");
  }

}
