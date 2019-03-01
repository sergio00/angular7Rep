
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cc-panel',
  template: `
  <div class="card">
  <div class="card-header {{cstyle}}" >
  <div [hidden]="!title" class=" title_h5 text-{{pparam}}"  > {{title}}
    <img *ngIf="imgSrc!=null" src="assets/img/{{imgSrc}}"  class="card-img-top"  alt="" width="{{imgWidth}}" height="{{imgHeight}}">
  </div>
</div>
  <div  align="center" class="card-body"><ng-content></ng-content></div> 
</div>
  `,
  styleUrls: ['./cc-panel.component.css']
})
/*
img = card-img-top , card-img-bottom  style="height:40px"
*/
export class CcPanelComponent implements OnInit {
  constructor() { }
 
  @Input() title;
  @Input() pparam;
  @Input() imgWidth; 
  @Input() imgHeight;
  @Input() imgSrc;
  @Input() cstyle;
  

  //public imgSrc;

  ngOnInit() {
    //console.log("this.imgSrc: " + this.imgSrc);
    //this.imgSrc="error.jpg";
    if (this.title==undefined ){
        this.title="";
    };
    if (this.cstyle==undefined || this.cstyle==""){
      this.cstyle="bg-info";
    };
    if (this.imgSrc!=undefined){
      
      if (this.imgWidth==undefined){
        this.imgWidth="50";
      }
      if (this.imgHeight==undefined){
        this.imgHeight="50";
      }
      //console.log("this.imgSrsc: " + this.imgSrc + " - " + this.imgWidth  + " - " + this.imgHeight);
    };
  }

}
