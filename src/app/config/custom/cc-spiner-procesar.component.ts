import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
/*

 Para usar en un componente se debe declarar

 @ViewChild(CcSpinerProcesarComponent)  spinnerProcesar :CcSpinerProcesarComponent;

 Para acceder a los metodos de inicio y fin this.spinnerProcesar.iniciaSpinner() , this.spinnerProcesar.finSpinner().

  Uso en el Html:

  <cc-spiner-procesar texto="Cargando Tramites..." ></cc-spiner-procesar>

*/

@Component({
  selector: 'cc-spiner-procesar',
  template: `<ngx-spinner
            bdColor="rgba(51,51,51,0.8)"
            size="medium"
            color="#fff"
            type="ball-spin-clockwise-fade">
          <p style="font-size: 20px; color: white">{{ltexto}}</p>
          </ngx-spinner>`
})
export class CcSpinerProcesarComponent implements OnInit {
  
  public ltexto:string="Cargando....";

  @Input() 
  set texto(texto: string){
    this.ltexto=texto;
  }


  @Input() 
  set ejecuta(valor: boolean){
    if (valor){
      this.spinner.show();
     }else{
      this.spinner.hide();
     } 

  }

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(){

  }
  
 public iniciaSpinner():void{
   this.spinner.show();
 }


 public finSpinner() : void{
    this.spinner.hide();
 }

 public ctlSpinner(valor:boolean) : void{
   if (valor){
    this.spinner.show();
   }else{
    this.spinner.hide();
   } 
  
}





}
