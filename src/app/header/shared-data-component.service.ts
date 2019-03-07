import { Injectable } from '@angular/core';
import { tabClass } from './header.component';
import { Subject } from 'rxjs';

@Injectable()
export class SharedDataComponentService {

  private tabsClass: tabClass[] = [];

  constructor() { }

  // Observable string sources
  private componentMethodCallSource = new Subject<any>();
  private componentMethodCallSource2 = new Subject<any>();

  // Observable string streams
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();
  componentMethodCalled2$ = this.componentMethodCallSource2.asObservable();


  // Service commands to call methods of father component from a dynamic child component stream1
  callCreateComponent(nameSelect: any) {
    this.componentMethodCallSource.next(nameSelect);
  }

  
  // Service message to call methods of father component from a dynamic child component stream2
  callCloseComponent(nameSelect: any) {
    this.componentMethodCallSource2.next(nameSelect);
  }
}
