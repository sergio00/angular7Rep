import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentSelectors } from 'src/app/component-selectors';
import { MatTableDataSource } from '@angular/material';
import { GithubIssue } from 'src/app/config/table-service/tabla.service';
import { PaginatorComponent } from 'src/app/config/custom/paginator/paginator.component';

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

  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;


  constructor() { 
    this.setLenght=20;
    this.setPageSize=10;
    this.setShowVisible=true;
    this.setConsulta='GitApiQuery';
  }

  ngOnInit() {
  }
  
  refreshData(list:any){
    console.log('update data:');
    console.log(list);
    this.dataSource1 = new MatTableDataSource(list.dataupdate);
    this.dataSource1.paginator = list.paginador;
    this.setLenght = list.length;
  }


}
