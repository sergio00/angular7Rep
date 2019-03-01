import { Directive, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[cdClik]'
  })
  export class CdClickDirective {
    @Input() cdClik = () => {};
  
    @HostListener('click', ['$event'])
    confirmFirst() {
         this.cdClik();
    }

  }