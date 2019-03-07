import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ComponentSelectors } from 'src/app/component-selectors';
import { MatTableDataSource } from '@angular/material';
import { GithubIssue } from 'src/app/config/table-service/tabla.service';
import { PaginatorComponent } from 'src/app/config/custom/paginator/paginator.component';
import { SharedDataComponentService } from 'src/app/header/shared-data-component.service';

@Component({
  selector: ComponentSelectors.ManteComponent,
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {
  displayedColumns: string[] = ['created', 'state', 'number', 'title']  ;//  ['position', 'name', 'weight', 'symbol']
  dataSource1: MatTableDataSource<GithubIssue> = null; //   PeriodicElement
  setLenght:number=20;
  setPageSize:number=10;
  setShowVisible:boolean=true;
  setConsulta='';
  @Input() dataInput:any;
  title:string=''; 

  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;


  constructor(private shareData:SharedDataComponentService) { 
    this.setLenght=20;
    this.setPageSize=10;
    this.setShowVisible=true;
    this.setConsulta='GitApiQuery';
  }

  ngOnInit() {
    this.title = this.dataInput.name;
    console.log(this.dataInput.name);
  }

  closeComponentTab(){
    this.shareData.callCloseComponent(this.title);
  }
  
  refreshData(list:any){
    console.log('update data:');
    console.log(list);
    this.dataSource1 = new MatTableDataSource(list.dataupdate);
    this.dataSource1.paginator = list.paginador;
    this.setLenght = list.length;
  }


}
