import { Component, Input, ViewChild, AfterViewInit, Output, EventEmitter, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatDialogConfig, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { merge, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { TablaService } from '../../table-service/tabla.service';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() length:number;
  @Input() pageSize:number;
  @Input() showOption:any;
  @Input() dataSourceP:string;

  @Output() refreshData: EventEmitter<any> = new EventEmitter<any>();

  exampleDatabase: TablaService | null;
  manualPage = null;
  observacion: Observable<any>;
  resultQuery: number;
  display = false;

  maxLimit: number = 100;
  reloadData: number = 20;
  indexQuery:number=0;


  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;


  constructor(private http: HttpClient, private confirmationDialogService: ConfirmationDialogService,public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.exampleDatabase = new TablaService(this.http);

    setTimeout(() => {
      if (this.length == undefined || this.length == null) {
        this.resultQuery = this.reloadData;
      } else {
        this.resultQuery = this.length;
      }

      this.loadData();

    }, 10);  
  }

  refreshDataB(say: any) {
    this.refreshData.emit(say);
  }

  public updateManualPage(index: number): void {
    var getMaxIndex = this.paginator.length / this.pageSize;
    this.manualPage = index;
    if (index <= getMaxIndex) {
      this.paginator.pageIndex = this.manualPage - 1;
      this.paginator.page.next({
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize,
        length: this.paginator.length
      });
    } else {
      alert('Pagina no encontrada')
    }
  }
  public clearManualPage(): void {
    this.manualPage = 1;
  }


  ngAfterViewInit() {
    /*this.exampleDatabase = new TablaService(this.http);


    setTimeout(() => {
      if (this.length == undefined || this.length == null) {
        this.resultQuery = this.reloadData;
      } else {
        this.resultQuery = this.length;
      }

      this.loadData();

    }, 10);*/

  }

  loadData(): void {
    setTimeout(() => {
      merge(this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            this.display = true;
            switch (this.dataSourceP) {
              case 'GitApiQuery':
                return this.exampleDatabase!.getRepoIssues("created", "desc", this.indexQuery, this.resultQuery);
                break;
              default:
                alert('No se ha ingresado del tipo de Consulta');
            }
            //return this.observacion;
          }),
          map(data => {
            this.display = false;

            if (this.paginator._nextButtonsDisabled()) {
              console.log('No habilitado');
              if ((this.paginator.getNumberOfPages() * this.paginator.pageSize) < this.maxLimit) {
                if (this.resultQuery <= this.maxLimit) {
                  this.resultQuery = this.resultQuery + this.reloadData;
                } else {
                  this.resultQuery = this.maxLimit;
                }
              } else {
                this.resultQuery = this.maxLimit;
                //this.openModal();
              }
            } else {
              console.log('habilitado');
              //this.openModal();
              //
            }
            return data.items;
          })
        ).subscribe(data => {
          var localStruture: any = {};
          this.display = false;
          localStruture = {
            dataupdate: data,
            paginador: this.paginator,
            length: this.resultQuery
          };
          this.refreshDataB(localStruture);
          
        }, error => {
          this.display = false;
          console.log('Could not load todos.' + error);
          alert('Datos No disponibles')
        });
    }, 0);
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        id: 1,
        title: 'Consulta'
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      //alert("response: " + result);
      //console.log(result);
      if(result){
        //console.log('cOKOKOKOK');
        this.indexQuery = this.indexQuery+1;
        this.resultQuery = this.reloadData;
        this.paginator.pageIndex = 0;
        this.loadData();
      }
    });
  }

}
