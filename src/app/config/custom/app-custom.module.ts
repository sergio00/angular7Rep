import { CcModalComponent } from './cc-modal.component';
import { ModalDialogService } from './modal/modal-dialog.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CdUpperCaseDirective } from './directivas/cd-upper-case.directive';
import { CdNumberDirective } from './directivas/cd-number-directive';
import { CdAutofocusDirective } from './directivas/cd-focus.directive';
import { CdConfirmDirective } from './directivas/cd-confir.directive';
import { CdFuncionDirective } from './directivas/cd-funcion.directive';
import { CdEnterDirective } from './directivas/cd-entrer.directive';
import { CdClickDirective } from './directivas/cd-click.directive';
import { CcPanelCollapseComponent } from './cc-panel-collapse/cc-panel-collapse.component';
import { ButtonRadioActiveComponent } from './cc-panel-buttons/button-radio-active.component';
import { FilterByOriginPipe } from './pipe/filter-by-origin.pipe';
import { CcButtonsComponent } from './cc-buttons/cc-buttons.component';
import { CcPanelGroupComponent } from './cc-panel-group.component';
import { CommonModule } from '@angular/common';
import { CcPanelComponent } from '../custom/cc-panel/cc-panel.component';
import {AtomSpinnerModule} from 'angular-epic-spinners';

import { NgModule } from '@angular/core';
import { Botones } from './cc-panel-buttons/buttons.componente';
import { NgbModule, NgbCollapse, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CcSpinerProcesarComponent } from './cc-spiner-procesar.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  declarations: [
    CcPanelComponent,
    CcPanelGroupComponent,
    CcButtonsComponent,
    ButtonRadioActiveComponent,
    CcPanelCollapseComponent,
    FilterByOriginPipe,
    CdClickDirective,
    CdEnterDirective,
    CdFuncionDirective,
    CdConfirmDirective,
    CdAutofocusDirective,
    CdNumberDirective,
    CdUpperCaseDirective,
    ConfirmationDialogComponent,
    CcSpinerProcesarComponent,
    CcModalComponent,
    PaginatorComponent    
    
    
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgxSpinnerModule,
    FormsModule,
    AppMaterialModule,
    AtomSpinnerModule
  ],
  exports: [
    CcPanelComponent,
    CcPanelGroupComponent,
    CcButtonsComponent,
    FilterByOriginPipe,
    ButtonRadioActiveComponent,
    CcPanelCollapseComponent,
    CdClickDirective,
    CdEnterDirective,
    CdFuncionDirective,
    CdConfirmDirective,
    CdAutofocusDirective,
    CdNumberDirective,
    CdUpperCaseDirective,
    NgbModule,
    ConfirmationDialogComponent,
    NgxSpinnerModule,
    CcSpinerProcesarComponent,
    CcModalComponent,
    PaginatorComponent
    
  ],
  
  providers: [Botones,NgbCollapse,
    NgbActiveModal, ConfirmationDialogService,
    ModalDialogService],
  entryComponents: [ ConfirmationDialogComponent ],

})
export class AppCustomModule {}
