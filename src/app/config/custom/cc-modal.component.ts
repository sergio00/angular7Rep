
import { Component, OnInit, Input, Output } from '@angular/core';

declare const $: any;

@Component({
  selector: 'cc-modal',
  template: ` 
  <div class="modal fade" data-backdrop='false' role="dialog" id="{{idModal}}">
  <div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
      <div class="modal-header" >
      <h4 class="modal-title">{{ title }}</h4>
        <button type="button" class="close" aria-label="Close"  (click)="cerrarModal()">
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
  @Output() salida; 


 constructor() { }
 
 ngOnInit() {
 
 }

 cerrarModal(){
  $("#"+this.idModal).modal("hide");
}

}
