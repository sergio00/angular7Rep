import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
 
 

  visitRangle(){
    console.log("Ejecuto funcion");

    alert("Ejecuta Metodo");
  }
  ejecutaEnter(){

    console.log("Ejecuta Enter");
    alert("Ejecuta Enter");
  }


  ejecutaEnterParam(valor){

    console.log("Ejecuta EnterValor:"+valor);
    alert("Ejecuta Enter Valor");
  }

  ejecutaEnterParamValores(valor1, valor2){

    console.log("Ejecuta EnterValor:"+valor1 +" - "+valor2 );
    alert("Ejecuta Enter Valor");
  }

  


}
