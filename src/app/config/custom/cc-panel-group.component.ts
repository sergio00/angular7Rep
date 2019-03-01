import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cc-panel-group',
  template: `
  <div id="accordion" title="{{title}}" > 
   
      <ng-content></ng-content>
   
</div>
  `
})
export class CcPanelGroupComponent implements OnInit {

  constructor() { }
  @Input() title;

  ngOnInit() {
    
  }

}
 