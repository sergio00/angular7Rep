import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ComponentSelectors } from 'src/app/component-selectors';
import { SharedDataComponentService } from '../shared-data-component.service';

@Component({
  selector: ComponentSelectors.dashBoardComponent,
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  @Input() dataInput: any;
  @Output('dataOutput') dataOutput: EventEmitter<any> = new EventEmitter<any>();


  constructor(private shareData: SharedDataComponentService) { }

  ngOnInit() {
  }

  setTabActive(tabSelect: string) {
    var userData: any = {
      title: tabSelect,
      datos: {
        userId: 10,
        name: 'Sergio'
      }
    }
    this.shareData.callCreateComponent(userData);
  }
  reportes(){
	console.log('reportes');
	}
}
