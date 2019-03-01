import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { MatPaginatorIntl, MatDialogModule, MatPaginatorModule, MatRippleModule, MatDividerModule } from '@angular/material';
import { CustomMatPaginatorIntl } from './custom-paginator-intl';
@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatRippleModule,
    MatDividerModule
  ],
  providers: [{provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}]
})
export class AppMaterialModule {}
