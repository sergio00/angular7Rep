import { Component, Input } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { cbtn } from '../cc-panel-buttons/buttons.componente';

@Component({
  selector: 'app-cc-panel-collapse',
 
  templateUrl: './cc-panel-collapse.component.html',
  styleUrls: ['./cc-panel-collapse.component.css'],
})
export class CcPanelCollapseComponent {
  @Input() title: string;
  @Input() title2: string;
  @Input() groupButton: cbtn[];
  @Input() filtroBoton: string;
  @Input() pcolapse: any;
  @Input() style: any;
  @Input() styleTitle:any;
  @Input() precoger: any;
  @Input() pparams: any;
  public agrupacion: cbtn[] = [];
  public isCollapsed: any;
  public filtro: string;
  private pp:any;

  constructor(public collapse: NgbCollapse) {
  }

  ngOnInit() {
    if (this.precoger == undefined || this.precoger == '') {
      this.isCollapsed = true;
    }
    if (this.style == undefined || this.style == '') {
      this.style = 'bg-info';
    }
    if (this.styleTitle==undefined || this.styleTitle==""){
      this.styleTitle="text-light";
    };

    this.validateData();
  }

  validateData() {
    this.filtro = this.filtroBoton;
    this.pp = eval(this.pparams);
    if (this.filtro != null && this.filtro != undefined) {
     
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
  }


}