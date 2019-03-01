import { Directive,Input, ElementRef, Renderer } from '@angular/core';
 
@Directive({
  selector: '[cdFocus]'
})
export class CdAutofocusDirective {
  @Input() appAutofocus: boolean;
  private el: any;
  constructor(
    private elementRef:ElementRef,
  ) { 
    this.el = this.elementRef.nativeElement;
   
  }
  ngOnInit(){
    this.el.focus();
  }
 
}