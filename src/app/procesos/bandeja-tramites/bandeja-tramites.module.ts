import { AppCustomModule } from './../../config/custom/app-custom.module';
import { AppMaterialModule } from './../../config/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandejaTramitesComponent } from './bandeja-tramites.component';

@NgModule({
  declarations: [BandejaTramitesComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppCustomModule    
  ],
  entryComponents: [ BandejaTramitesComponent],
  exports: [AppCustomModule]
})
export class BandejaTramitesModule { }
