import { ReportesRoutingModule } from './reportes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturasComponent } from './facturas/facturas.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [FacturasComponent, ClientesComponent],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
