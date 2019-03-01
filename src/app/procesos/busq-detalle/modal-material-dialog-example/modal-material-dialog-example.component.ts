import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-modal-material-dialog-example',
  templateUrl: './modal-material-dialog-example.component.html',
  styleUrls: ['./modal-material-dialog-example.component.css']
})
export class ModalMaterialDialogExampleComponent  {

  constructor(
    public dialogRef: MatDialogRef<ModalMaterialDialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}
