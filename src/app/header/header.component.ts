import { Router } from '@angular/router';
import { Component, ViewChild, ViewContainerRef, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { DynamicComponentsService } from '../dynamic-components.service';
import { ComponentSelectors } from '../component-selectors';
import { SharedDataComponentService } from './shared-data-component.service';

export interface tabClass {
  name?: string,
  visible?: any,
  active?: any,
  isCloseable?: any
}

export interface tabTemplate {
  selector?: any,
  hiddenValue?: any,
  selectorName?: any,
  position?: any,
  modulePath?: any,
  haveParams?: any
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('containerAll', { read: ViewContainerRef }) containerTemplate: ViewContainerRef;
  queryListComponent: tabClass[] = [];
  collection: HTMLCollection;
  templateLazy: tabTemplate[] = [];
  routerMessage: string = 'Home';
  selectorNameC: string;
  dataInput: any;

  constructor(private authService: AuthService,
    private shareData: SharedDataComponentService, private dynamicComponentSvc: DynamicComponentsService) {
    this.resetTemplateFactory();
    this.shareData.componentMethodCalled$.subscribe((data) => {
      console.log(data);
      this.selectorNameC = data.title ;
      this.dataInput=data;
      this.loadADynamic(this.selectorNameC);
    });
    this.shareData.componentMethodCalled2$.subscribe((data) => {
      this.closeTabByName(data);
    });
  }
  reportes(){
    console.log('reportes g');
  }

  private resetTemplateFactory() {
    this.templateLazy = [
      {
        selector: ComponentSelectors.DetailTramComponent, hiddenValue: true,
        selectorName: 'Detalle Tramite',
        modulePath: 'src/app/procesos/acn.module#AcnModule'
      },
      {
        selector: ComponentSelectors.ManteComponent, hiddenValue: true,
        selectorName: 'Mantenimiento',
        modulePath: 'src/app/mantenimiento/mantenimiento.module#MantenimientoModule',
        haveParams: true
      },
      {
        selector: ComponentSelectors.BusqDetailComponent, hiddenValue: true,
        selectorName: 'Detalle Busqueda',
        modulePath: 'src/app/procesos/acn.module#AcnModule'
      },
      {
        selector: ComponentSelectors.dashBoardComponent, hiddenValue: true,
        selectorName: 'Dashboard',
        modulePath: 'src/app/header/dashboard-component/dashboard-component.module#DashboardModuleModule',
        haveParams: true
      }
    ];
  }

  dataOutput(name: any) {
    this.selectorNameC = name;
    this.loadADynamic(this.selectorNameC);
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.loadADynamic('Dashboard');
  }

  loadADynamic(nameComponent: any) {
    this.selectorNameC = nameComponent;
    var templateAux: tabTemplate = null;

    if (this.templateLazy.length === 0) {
      this.resetTemplateFactory();
    }

    this.templateLazy.forEach(element => {
      if (element.selectorName === this.selectorNameC) {
        templateAux = element;
      }
    });

    if (templateAux === null) {
      alert('Vista no creada: ' + this.selectorNameC);
    } else {
      this.createdLoadComponent(templateAux);
    }
  }

  refreshRouting(): any {
    if (this.queryListComponent.length === 0) {
      this.routerMessage = 'Home';
    } else {
      this.queryListComponent.forEach(element => {
        if (element.active) {
          this.routerMessage = 'Home->' + element.name;
        }
      });
    }
  }

  private createdLoadComponent(element: tabTemplate): any {
    const local: tabClass = {};
    //var localParams :any = null;
    if (this.queryListComponent.length === 0) {
      if (element.haveParams) {
        this.createComponentFactory2(element, this.dataInput).then(() => {
          this.collection = document.getElementById('containerAll').children;
          local.active = true;
          local.isCloseable = true;
          local.name = element.selectorName;
          local.visible = true;
          this.queryListComponent.push(local);
          this.templateLazy.forEach(elemento => {
            if (element === elemento) {
              elemento.position = 0;
            }
          });
          this.refreshRouting();
        });
        console.log(this.selectorNameC);
      } else {
        this.createComponentFactory(element).then(() => {
          this.collection = document.getElementById('containerAll').children;
          local.active = true;
          local.isCloseable = true;
          local.name = element.selectorName;
          local.visible = true;
          this.queryListComponent.push(local);
          this.templateLazy.forEach(elemento => {
            if (element === elemento) {
              elemento.position = 0;
            }
          });
          console.log(this.collection);
          this.refreshRouting();
        });
      }

    } else if (this.queryListComponent.length > 0) {
      if (this.existTab(element) && this.existCollectionTab(element)) {
        console.log('elemento ya creado: ' + element.selectorName);
        this.setCollectionVisibleItems(element);
      } else {
        if (element.haveParams) {
          this.createComponentFactory2(element, this.dataInput).then(() => {
            this.collection = document.getElementById('containerAll').children;
            local.active = true;
            local.isCloseable = true;
            local.name = element.selectorName;
            local.visible = true;
            this.queryListComponent.push(local);
            this.templateLazy.forEach(elemento => {
              if (element === elemento) {
                elemento.position = this.queryListComponent.length - 1;
                this.setCollectionVisibleItems(elemento);
              }
            });
            this.refreshRouting();
          });

        } else {
          this.createComponentFactory(element).then(() => {
            this.collection = document.getElementById('containerAll').children;
            local.active = true;
            local.isCloseable = true;
            local.name = element.selectorName;
            local.visible = true;
            this.queryListComponent.push(local);
            this.templateLazy.forEach(elemento => {
              if (element === elemento) {
                elemento.position = this.queryListComponent.length - 1;
                this.setCollectionVisibleItems(elemento);
              }
            });
            this.refreshRouting();
          });

        }

      }
    }
  }

  /**
   * Create dynamic component without params
   * @param element 
   */
  private createComponentFactory(element: tabTemplate): Promise<void> {
    return this.dynamicComponentSvc.createComponent({
      modulePath: element.modulePath,
      selectorName: element.selector,
      outlet: this.containerTemplate
    });
  }

  /**
   * Create dynamic component with params
   * @param element 
   * @param paramsIn 
   * @param paramsOut 
   */
  private createComponentFactory2(element: tabTemplate, paramsIn: any): Promise<void> {
    return this.dynamicComponentSvc.createComponentParams({
      modulePath: element.modulePath,
      selectorName: element.selector,
      outlet: this.containerTemplate
    }, paramsIn);
  }

  private setCollectionVisibleItems(elemento: tabTemplate): any {
    setTimeout(() => {
      for (var i = 0; i < this.collection.length; i++) {
        if (this.collection.item(i).nodeName.toLocaleLowerCase() === elemento.selector) {
          this.collection["" + i + ""].hidden = false;
        } else {
          this.collection["" + i + ""].hidden = true;
        }
      }
      this.setVisibleTabs(elemento.selectorName);
      this.refreshRouting();
    }, 10);

  }

  private setVisibleTabs(selectorName: any): any {
    this.queryListComponent.forEach(tab => (tab.active = false));

    for (let i = 0; i < this.queryListComponent.length; i++) {
      if (this.queryListComponent[i].name === selectorName) {
        this.queryListComponent[i].active = true;
      }
    }

  }

  private existTab(element: tabTemplate): any {
    var resultado = false;
    this.queryListComponent.forEach(element1 => {
      if (element1.name === element.selectorName) {
        resultado = true;
      }
    });
    return resultado;
  }

  private existCollectionTab(element: tabTemplate): any {
    var resultado = false;
    //document.getElementById('containerAll').children.item(0).localName
    for (var i = 0; i < this.collection.length; i++) {
      if (this.collection.item(i).localName === element.selector) {
        resultado = true;
      }
    }
    return resultado;
  }

  selectDynamicTab(tab: tabClass) {
    var localTabtemplate: tabTemplate = null;
    this.templateLazy.forEach(element => {
      if (element.selectorName === tab.name) {
        localTabtemplate = element;
      }
    });

    if (localTabtemplate != null) {
      this.setCollectionVisibleItems(localTabtemplate);
    } else {
      console.log('tab no encontrado');
    }
  }

  private closeTabByName(name: string) {
    var local: tabClass = null;
    this.queryListComponent.forEach(element => {
      if (element.name === name) {
        local = element;
      }
    });

    if (local === null) {
      console.log('Tab not found');
    } else {
      this.closeDynamicTab(local);
    }
  }



  closeDynamicTab(tab: tabClass) {
    //console.log(tab);
    var localtemplateCol: tabTemplate[] = [];
    for (let i = 0; i < this.queryListComponent.length; i++) {
      if (this.queryListComponent[i] === tab) {
        this.queryListComponent.splice(i, 1);
        this.containerTemplate.remove(i);
        break;
      }
    }
    setTimeout(() => {
      for (var j = 0; j < this.collection.length; j++) {
        this.templateLazy.forEach(element => {
          if (this.collection["" + j + ""].nodeName.toLocaleLowerCase() === element.selector) {
            localtemplateCol.push(element);
          }
        });
      }
      /*console.log('----------------------------------')
      console.log(this.collection);
      console.log(localtemplateCol);*/
      if (localtemplateCol.length > 0) {
        this.setCollectionVisibleItems(localtemplateCol[0]);
      } else {
        this.refreshRouting();
        console.log('No existe elementos');
      }
    }, 10);

  }

}
