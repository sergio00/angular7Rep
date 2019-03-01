import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusqDetalleModule } from './busq-detalle/busq-detalle.module';
import { BandejaTramitesModule } from './bandeja-tramites/bandeja-tramites.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BusqDetalleModule,
    BandejaTramitesModule
    ]
})
export class AcnModule { }
