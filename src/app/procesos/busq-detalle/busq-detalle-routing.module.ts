
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusqDetalleComponent } from './busq-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: BusqDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusqDetalleRoutingModule { }
