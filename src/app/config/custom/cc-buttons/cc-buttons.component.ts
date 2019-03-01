import { Component, OnInit, Input } from '@angular/core';
import { cbtn, Botones } from '../cc-panel-buttons/buttons.componente';

@Component({
  selector: 'app-cc-buttons',
  templateUrl: './cc-buttons.component.html',
  styleUrls: ['./cc-buttons.component.css']
})
export class CcButtonsComponent implements OnInit {
  @Input() grupoBotones: cbtn[];
  @Input() filtroBotones:any;
  @Input() parametros:any;
  public agrupacion: cbtn[] = [];
  public filtrado;
  private pp:any;

  //<cc-buttons pbtns="vm.buttons" pfilterbtns="ctdet" pparam="{{c}}" />

  constructor(private _boton:Botones) { }
 
  ngOnInit() {
    this.validateData();
  }

  validateData() {
    this.filtrado = this.filtroBotones; 
    this.pp = eval(this.parametros);   
    if (this.filtrado != null && this.filtrado != undefined) {
      
      this.grupoBotones.forEach(element => {
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
    }else{
      this.agrupacion = this.grupoBotones;
    }
    console.log('Botones CCButons: ');
    console.log(this.agrupacion);
    console.log('Filtro botones CCButons: ' + this.filtrado);

  }

}
