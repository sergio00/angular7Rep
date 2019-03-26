
import { Component, OnInit, Input, Output } from '@angular/core';

declare const $: any;

@Component({
  selector: 'cc-modal',
  template: ` 
  <div class="modal fade" role="dialog" id="{{idModal}}">
  <div class="modal-dialog modal-dialog-centered  {{size}}" >
  <div class="modal-content">
      <div class="modal-header" >
      <h5 class="modal-title" *ngIf="title!=null" >{{ title }}</h5>
        <button type="button" class="close" aria-label="Close"  *ngIf="close=='S'" (click)="cerrarModal()" >
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
    <ng-content></ng-content>
    </div>
    </div>
    </div>
    </div>
  `
})

export class CcModalComponent implements OnInit {
  @Input()  title:string;
  @Input()  idModal:string;
  @Input()  size:string;
  @Input()  close:string;
  @Output() salida; 


 constructor() { }
 
 ngOnInit() {
    if (this.size==undefined){
      this.size="";
    }
    if(this.close==undefined){
        this.close="S";
    }

 }

 cerrarModal(){
  $("#"+this.idModal).modal("hide");
}

}
