import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { cbtn, Botones } from './buttons.componente';

@Component({
  selector: 'app-button-radio-active',
  templateUrl: './button-radio-active.component.html',
  styleUrls: ['./button-radio-active.component.css']
})


export class ButtonRadioActiveComponent implements OnInit {
  public radioGroupForm: FormGroup;
  @Input() title: string;
  @Input() groupButton: cbtn[];
  @Input() filtroBoton;
  @Input() pparams: any;
  @Input() style: string;
  @Input() styleTitle: string;
  public agrupacion: cbtn[] = [];
  public filtrado;
  private pp:any;

  constructor(private formBuilder: FormBuilder, private _boton: Botones) { 

  }

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'model': 1
    });

    if (this.style == undefined || this.style == '') {
      this.style = 'bg-info';
    }
    if (this.styleTitle==undefined || this.styleTitle==""){
      this.styleTitle="text-light";
    };
    this.validateData();
  }

  validateData() {
    this.filtrado = this.filtroBoton;
    this.pp = eval(this.pparams);
    if (this.filtrado != null && this.filtrado != undefined) {
      this.groupButton.forEach(element => {
        if (element.permiso) {
          var b: any = {};
          b = (element);
          if (b.boton.datoBadge != undefined) {
            b.pDatoBagde = eval("pp." + b.boton.datoBadge);
          } else {
            b.pDatoBagde = 'C';
          }
          if (b.paramAccion != ""&& b.paramAccion != undefined && this.pp != "" && this.pp != undefined) {
            //var a = { v1: b.paramAccion, v2: this.pp };
            b.paramAccion = { v1: b.paramAccion, v2: this.pp };
          }else if (this.pp == "" || this.pp == undefined){
            b.paramAccion = b.paramAccion ;            
          } else { b.paramAccion = this.pp; };
          this.agrupacion.push(b);
        }
      });
    } else {
      this.agrupacion = this.groupButton;
    }
    /*console.log('Botones PanelButtons: ');
    console.log(this.agrupacion);
    console.log('Filtro botones PanelButtons: ' + this.filtrado);*/

  }


}