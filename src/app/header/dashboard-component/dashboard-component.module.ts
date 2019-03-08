import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentComponent } from './dashboard-component.component';
import { AppMaterialModule } from 'src/app/config/app-material/app-material.module';

@NgModule({
  declarations: [DashboardComponentComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  //providers:[SharedDataComponentService],
  entryComponents:[DashboardComponentComponent]
})
export class DashboardModuleModule { }
