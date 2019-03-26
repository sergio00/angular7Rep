
import { AppCustomModule } from './../../config/custom/app-custom.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusqDetalleComponent } from './busq-detalle.component';
import { ModalDetalleComponent } from './modal-detalle/modal-detalle.component';
import { ModalMaterialDialogExampleComponent } from './modal-material-dialog-example/modal-material-dialog-example.component';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/config/app-material/app-material.module';

@NgModule({
  declarations: [BusqDetalleComponent, 
    ModalDetalleComponent,
    ModalMaterialDialogExampleComponent],
  imports: [
    CommonModule,
    AppCustomModule,
    AppMaterialModule,
    FormsModule
    
  ],
 
  entryComponents: [
    ModalDetalleComponent,
    BusqDetalleComponent,
    ModalMaterialDialogExampleComponent
  ],
  exports: [AppCustomModule]
})
export class BusqDetalleModule { }
