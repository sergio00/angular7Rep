import { Directive, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[CdEnter]'
  })
  export class CdEnterDirective {
    @Input() CdEnter:any;
    @Input() appParam1:any;
    @Input() appParam2:any;
    @Input() appParam3:any;
  
// (click)="this[alerta]()"  

    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        if (event.keyCode==13 || event.keyCode==9){
                if (this.appParam1 == undefined && this.appParam2 == undefined  && this.appParam3 == undefined){
                   this.CdEnter();
                }else if (this.appParam1 != undefined && this.appParam2 == undefined  && this.appParam3 == undefined){
                    this.CdEnter(this.appParam1);
                }else if (this.appParam1 != undefined && this.appParam2!= undefined  && this.appParam3 == undefined){
                  this.CdEnter(this.appParam1,this.appParam2);
                }else if (this.appParam1 != undefined && this.appParam2!= undefined  && this.appParam3 != undefined){
                  this.CdEnter(this.appParam1,this.appParam2,this.appParam2);
                }
        }
    }

  }