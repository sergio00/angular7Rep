import { CcSpinerProcesarComponent } from './../../config/custom/cc-spiner-procesar.component';
import { Tramites } from './modelo/tramites';
import { BandejaTramitesService } from './bandeja-tramites.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentSelectors } from 'src/app/component-selectors';


@Component({
  selector: ComponentSelectors.DetailTramComponent,
  templateUrl: './bandeja-tramites.component.html',
  styleUrls: ['./bandeja-tramites.component.css']
})
export class BandejaTramitesComponent implements OnInit {

  @ViewChild(CcSpinerProcesarComponent)  spinnerProcesar :CcSpinerProcesarComponent;

  constructor(private router:Router,
              private Bandtramitesservice:BandejaTramitesService
            
            ) { }

  displayedColumns: string[] = ['id', 'nombres', 'fecha','actions'];

  public tramites: Tramites[] = [];
  public lista:any[]=[];
  

  ngOnInit() {
    this.cargarDatos();
    
  }
  consultar(){
    this.router.navigateByUrl('/procesos/detalleBusqueda');
  }

cargarDatos() : void{
  

  this.spinnerProcesar.iniciaSpinner();
  this.Bandtramitesservice.getList().subscribe(
              tramite => {
                            this.tramites = tramite;
                            console.log(this.tramites);
                              setTimeout(() => {
                                /** spinner ends after 5 seconds */
                                  this.spinnerProcesar.finSpinner();
                                 console.log("Pausa");
                               

                            } , 5000);
                          },
                          error=>{
                            this.spinnerProcesar.finSpinner();
                          
                            console.log("Fallo el servicio")
                          }
                                              );
   
 /////// Servicio any //   
 this.Bandtramitesservice.getLista().subscribe(
    res =>{ this.lista= res;
        console.log("Lista Any:");
        console.log(this.lista);
    },
    err=>{

    }
    
 );

}


}
