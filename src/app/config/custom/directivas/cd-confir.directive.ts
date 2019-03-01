import { Directive, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[CdConfirm]'
  })
  export class CdConfirmDirective {
    @Input() CdConfirm = () => {};
    @Input() confirmMessage = 'Are you sure you want to do this?';
  
    @HostListener('click', ['$event'])
    confirmFirst() {
      const confirmed = window.confirm(this.confirmMessage);
  
      if(confirmed) {
         this.CdConfirm();
      }
    }
  }