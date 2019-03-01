
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './bandeja-tramites/bandeja-tramites.module#BandejaTramitesModule'
  },
  {
    path: 'detalleBusqueda',
    loadChildren: './busq-detalle/busq-detalle.module#BusqDetalleModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcnRoutingModule { }
