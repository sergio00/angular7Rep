import { Directive,Input, ElementRef, Renderer } from '@angular/core';
 
@Directive({
  selector: '[cdFuncion]'
})
export class CdFuncionDirective {
  @Input() cdFuncion: any;
  
  
  
  
 
}