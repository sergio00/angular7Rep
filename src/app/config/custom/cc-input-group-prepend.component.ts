import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cc-input-group-prepend',
  template: `
  <div class="input-group input-group-sm mt-1">
      <div class="input-group-prepend"  >
      <span class="input-group-text {{styleSpan}}" id="inputGroup-sizing-sm"  >{{label}}</span>
      </div>
      <ng-content></ng-content>
  </div>

  `
})
export class CcInputGroupPrepend implements OnInit {

  constructor() { }
  @Input() label;
  @Input() styleSpan;

  ngOnInit() {
    
  }

}
 