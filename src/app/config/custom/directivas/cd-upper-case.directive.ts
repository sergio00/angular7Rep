import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: 'input[cdUppercase]'
})
export class CdUpperCaseDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value =  initalValue.toUpperCase();

  }

}