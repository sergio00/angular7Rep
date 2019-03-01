import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosUsuarioComponent } from './datos-usuario.component';
import { AppMaterialModule } from 'src/app/config/app-material/app-material.module';
import { AppCustomModule } from 'src/app/config/custom/app-custom.module';

@NgModule({
  declarations: [DatosUsuarioComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppCustomModule
  ],
  entryComponents: [DatosUsuarioComponent]
})
export class DatosUsuarioModule { }
